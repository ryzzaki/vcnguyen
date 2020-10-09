import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import BodyText from './slices/BodyText';
import { ArrowRight } from '../assets/icons';
import { useRouter } from 'next/dist/client/router';

type PostPreviewProps = {
  id: string;
  uid: string | undefined;
  title: RichTextBlock[];
  description: RichTextBlock[];
  dateCreated: Date;
};

const PostPreview: React.FC<PostPreviewProps> = ({
  id,
  uid,
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
      className="flex flex-col shadow-lg pt-10 mb-10 px-10 hover:bg-verylightgrey hover:bg-opacity-25 cursor-auto rounded transition duration-300 ease-in-out"
    >
      <div className="flex flex-col md:flex-row py-5">
        <span
          className="font-semibold text-20 md:text-32 hover:underline cursor-pointer"
          onClick={() => handleClick(uid as string)}
        >
          <RichText render={title} />
        </span>
        <span className="md:ml-auto text-14 text-lightgrey">
          {new Date(dateCreated).toDateString()}
        </span>
      </div>
      <div className="py-5">
        <BodyText text={description} />
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

export default PostPreview;
