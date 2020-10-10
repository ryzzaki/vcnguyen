import React from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from './slices/BodyText';
import SliceZone from './slices/SliceZone';
import HeadingTitle from './slices/HeadingTitle';

type BlogPostProps = {
  title: RichTextBlock[];
  description: RichTextBlock[];
  dateCreated: Date;
  body: {
    slice_type: 'code' | 'rich_text';
    items: [];
  }[];
};

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  dateCreated,
  body,
}: BlogPostProps) => (
  <div className="py-20">
    <HeadingTitle title={title} />
    <div className="break-words">
      <BodyText text={description} />
    </div>
    <div>Posted on {new Date(dateCreated).toDateString()}</div>
    <div>
      <SliceZone body={body} />
    </div>
  </div>
);

export default BlogPost;
