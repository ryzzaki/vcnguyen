import React from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from '../slices/BodyText';
import SliceZone from '../slices/SliceZone';
import HeadingTitle from '../slices/HeadingTitle';
import Tag from '../utils/Tag';

type BlogPostProps = {
  title: RichTextBlock[];
  description: RichTextBlock[];
  dateCreated: Date;
  body: {
    slice_type: 'code' | 'rich_text';
    items: [];
  }[];
  tags: string[];
};

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  dateCreated,
  body,
  tags,
}: BlogPostProps) => (
  <div className="py-20">
    <HeadingTitle title={title} />
    <div className="break-words">
      <BodyText text={description} />
    </div>
    <div className="flex flex-row flex-wrap">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
    <div className="text-12 md:text-14 pb-10">
      Posted on {new Date(dateCreated).toDateString()}
    </div>
    <div className="pt-10 pb-30">
      <SliceZone body={body} />
    </div>
  </div>
);

export default BlogPost;
