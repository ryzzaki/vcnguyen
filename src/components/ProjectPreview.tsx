import React from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from './slices/BodyText';
import { ArrowRight } from '../assets/icons';
import { useRouter } from 'next/dist/client/router';
import HeadingTitle from './slices/HeadingTitle';

type ProjectPreviewProps = {
  id: string;
  uid: string | undefined;
  title: RichTextBlock[];
  thumbnail: {
    url: string;
    alt?: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
  description: RichTextBlock[];
  projectInit: Date;
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  id,
  uid,
  title,
  thumbnail,
  description,
  projectInit,
}: ProjectPreviewProps) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/project/${id}`);
  };

  return (
    <div
      key={id}
      className="flex flex-col shadow-lg py-20 mb-20 px-10 hover:bg-verylightgrey hover:bg-opacity-25 cursor-auto rounded transition duration-300 ease-in-out"
    >
      <div className="flex flex-col md:flex-row py-5">
        <span
          className="hover:underline cursor-pointer"
          onClick={() => handleClick(uid as string)}
        >
          <HeadingTitle title={title} />
        </span>
        <span className="md:ml-auto text-14 text-lightgrey">
          Created on {new Date(projectInit).toDateString()}
        </span>
      </div>
      <div className="flex py-5 justify-center">
        <img
          src={thumbnail.url}
          alt={thumbnail.alt ?? 'Project Thumbnail'}
          width={thumbnail.dimensions.width}
          height={thumbnail.dimensions.height}
          className="w-full object-cover h-200 md:object-none md:h-full"
        />
      </div>
      <div className="py-5 break-words">
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

export default ProjectPreview;
