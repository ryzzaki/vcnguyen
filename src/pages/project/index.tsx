import MainContainer from '../../components/containers/MainContainer';
import React, { useEffect, useState } from 'react';
import { PrismicClient, PrismicQuery } from '../api/prismic';
import { Document as DataDoc } from 'prismic-javascript/types/documents';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from '../../components/slices/BodyText';
import ProjectPreview from '../../components/project/ProjectPreview';
import HeadingTitle from '../../components/slices/HeadingTitle';
import PostLoader from '../../components/utils/PostLoader';

const ProjectsPage: React.FC = () => {
  const [pageData, setPageData] = useState<{
    intro_title: RichTextBlock[];
    intro_description: RichTextBlock[];
    projects_title: RichTextBlock[];
  }>();

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
            new Date(b.data.project_init).getTime() -
            new Date(a.data.project_init).getTime()
        )
      );
    });
  }, []);

  return (
    <MainContainer title="Projects | Cuong Nguyen" theme="dark">
      {pageData ? (
        <div className="flex flex-col items-left">
          <section className="py-20 my-20">
            <HeadingTitle title={pageData.intro_title} leftAlign={false} />
            <div className="py-10 text-18">
              <BodyText text={pageData.intro_description} />
            </div>
          </section>
          <section className="py-20 my-20">
            <HeadingTitle title={pageData.projects_title} leftAlign={false} />
            {projectData.map((project) => (
              <ProjectPreview
                key={project.id}
                id={project.id}
                uid={project.uid}
                tags={project.tags}
                title={project.data.title}
                thumbnail={project.data.project_thumbnail}
                description={project.data.description}
                projectInit={project.data.project_init}
              />
            ))}
          </section>
        </div>
      ) : (
        <PostLoader />
      )}
    </MainContainer>
  );
};

export default ProjectsPage;
