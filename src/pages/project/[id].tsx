import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainContainer from '../../components/containers/MainContainer';
import { PrismicClient } from '../api/prismic';
import PostLoader from '../../components/utils/PostLoader';
import ProjectDetail from '../../components/project/ProjectDetail';
import { Document as DataDoc } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // retype this from DataDoc to custom interface later
  const [project, setProject] = useState<DataDoc>();

  useEffect(() => {
    if (id) {
      const client = PrismicClient();
      client.getByUID('project_post', id as string, {}).then((res) => {
        setProject(res);
      });
    }
  }, [id]);

  return (
    <MainContainer
      title={`${
        RichText.asText(project?.data.title) ?? 'Portfolio'
      } | Cuong Nguyen`}
      theme="dark"
    >
      <div className="flex flex-col md:flex-row py-10">
        {project ? (
          <ProjectDetail
            title={project.data.title}
            thumbnail={project.data.project_thumbnail}
            description={project.data.description}
            projectInit={project.data.project_init}
            dateCreated={project.data.created_at}
            projectUrl={project.data.project_url}
            body={project.data.body}
            tags={project.tags}
          />
        ) : (
          <PostLoader />
        )}
      </div>
    </MainContainer>
  );
};

export default ProjectDetailPage;
