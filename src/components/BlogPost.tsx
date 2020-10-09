import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import BodyText from './slices/BodyText';
import SliceZone from './slices/SliceZone';

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
    <div className="font-bold text-32">
      <RichText render={title} />
    </div>
    <div>
      <BodyText text={description} />
    </div>
    <div>Posted on {new Date(dateCreated).toUTCString()}</div>
    <div>
      <SliceZone body={body} />
    </div>
  </div>
);

export default BlogPost;
