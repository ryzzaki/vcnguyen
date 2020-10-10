import React from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from '../slices/BodyText';
import { ArrowRight } from '../../assets/icons';
import { useRouter } from 'next/dist/client/router';
import HeadingTitle from '../slices/HeadingTitle';
import Tag from '../utils/Tag';

type PostPreviewProps = {
  id: string;
  uid: string | undefined;
  tags: string[];
  title: RichTextBlock[];
  description: RichTextBlock[];
  dateCreated: Date;
};

const BlogPreview: React.FC<PostPreviewProps> = ({
  id,
  uid,
  tags,
  title,
  description,
  dateCreated,
}: PostPreviewProps) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      key={id}
      className="flex flex-col shadow-lg pt-10 pb-15 px-10 mb-20 hover:bg-verylightgrey hover:bg-opacity-25 cursor-auto rounded transition duration-300 ease-in-out"
    >
      <div className="flex flex-col md:flex-row py-5">
        <span
          className="hover:underline cursor-pointer"
          onClick={() => handleClick(uid as string)}
        >
          <HeadingTitle title={title} />
        </span>
        <span className="md:ml-auto text-14 text-lightgrey">
          {new Date(dateCreated).toDateString()}
        </span>
      </div>
      <div className="py-5">
        <BodyText text={description} />
        <div className="flex flex-row flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div
          className="flex flex-row justify-end font-semibold cursor-pointer"
          onClick={() => handleClick(uid as string)}
        >
          <span className="hover:underline">Read More</span>{' '}
          <ArrowRight className="ml-5" />
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
