import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainContainer from '../../components/containers/MainContainer';
import { PrismicClient } from '../api/prismic';
import PostLoader from '../../components/utils/PostLoader';
import BlogPost from '../../components/blog/BlogPost';
import { Document as DataDoc } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

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
    <MainContainer
      title={`${RichText.asText(post?.data.title) ?? 'Blog'} | Cuong Nguyen`}
      theme="dark"
    >
      <div className="flex flex-col md:flex-row py-5">
        {post ? (
          <BlogPost
            title={post.data.title}
            description={post.data.description}
            dateCreated={post.data.created_at}
            body={post.data.body}
            tags={post.tags}
          />
        ) : (
          <PostLoader />
        )}
      </div>
    </MainContainer>
  );
};

export default BlogPostPage;
