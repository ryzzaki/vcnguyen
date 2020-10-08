import MainContainer from '../../components/containers/MainContainer';
import React, { useEffect, useState } from 'react';
import { PrismicClient, PrismicQuery } from '../api/prismic';
import { Document as DataDoc } from 'prismic-javascript/types/documents';
import PostPreview from '../../components/PostPreview';

const BlogPage: React.FC = () => {
  const [data, setData] = useState<DataDoc[]>([]);

  useEffect(() => {
    const client = PrismicClient();
    client.query(PrismicQuery('blog_post')).then((res) => {
      setData(res.results);
    });
  }, []);

  return (
    <MainContainer title="Portfolio" theme="dark">
      <div className="flex flex-col items-left mr-auto pb-20 mb-20">
        {data.map((post) => (
          <PostPreview
            key={post.id}
            id={post.id}
            uid={post.uid}
            title={post.data.title}
            description={post.data.description}
            dateCreated={post.data.created_at}
          />
        ))}
      </div>
    </MainContainer>
  );
};

export default BlogPage;
