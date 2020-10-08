import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainContainer from '../../components/containers/MainContainer';
import { PrismicClient } from '../api/prismic';
import PostLoader from '../../components/PostLoader';
import BlogPost from '../../components/BlogPost';
import { Document as DataDoc } from 'prismic-javascript/types/documents';

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // retype this from DataDoc to custom interface later
  const [post, setPost] = useState<DataDoc>();

  useEffect(() => {
    if (id) {
      const client = PrismicClient();
      client.getByUID('blog_post', id as string, {}).then((res) => {
        setPost(res);
      });
    }
  }, [id]);

  return (
    <MainContainer title="Portfolio" theme="dark">
      <div className="flex flex-col md:flex-row py-5">
        {post ? (
          <BlogPost
            title={post?.data.title}
            description={post?.data.description}
            dateCreated={post?.data.created_at}
            body={post?.data.body}
          />
        ) : (
          <PostLoader />
        )}
      </div>
    </MainContainer>
  );
};

export default BlogPostPage;
