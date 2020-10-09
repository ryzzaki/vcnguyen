import MainContainer from '../../components/containers/MainContainer';
import React, { useEffect, useState } from 'react';
import { PrismicClient, PrismicQuery } from '../api/prismic';
import { Document as DataDoc } from 'prismic-javascript/types/documents';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import BodyText from '../../components/slices/BodyText';
import ProjectPreview from '../../components/ProjectPreview';

const ProjectsPage: React.FC = () => {
  const [pageData, setPageData] = useState({
    intro_title: [] as RichTextBlock[],
    intro_description: [] as RichTextBlock[],
    projects_title: [] as RichTextBlock[],
  });

  const [projectData, setProjectData] = useState<DataDoc[]>([]);

  useEffect(() => {
    const client = PrismicClient();
    client.getSingle('projects_page', {}).then((res) => {
      const responseData = res?.data;
      setPageData({
        intro_title: responseData?.intro_title,
        intro_description: responseData?.intro_description,
        projects_title: responseData?.projects_title,
      });
    });

    client.query(PrismicQuery('project_post')).then((res) => {
      setProjectData(
        res.results.sort(
          (a, b) =>
            new Date(b.data.created_at).getTime() -
            new Date(a.data.created_at).getTime()
        )
      );
    });
  }, []);

  return (
    <MainContainer title="Projects | Cuong Nguyen" theme="dark">
      <div className="flex flex-col items-left">
        <section className="py-20 my-20">
          <div className="font-semibold py-10 text-24 md:text-32">
            <RichText render={pageData.intro_title} />
          </div>
          <div className="py-10 text-18 md:text-24">
            <BodyText text={pageData.intro_description} />
          </div>
        </section>
        <section className="pb-20 my-20">
          <div className="font-semibold py-10 text-24 md:text-32">
            <RichText render={pageData.projects_title} />
          </div>
          {projectData.map((project) => (
            <ProjectPreview
              key={project.id}
              id={project.id}
              uid={project.uid}
              title={project.data.title}
              thumbnail={project.data.project_thumbnail}
              description={project.data.description}
              projectInit={project.data.project_init}
            />
          ))}
        </section>
      </div>
    </MainContainer>
  );
};

export default ProjectsPage;
