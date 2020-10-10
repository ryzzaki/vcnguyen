import React from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from '../slices/BodyText';
import { ArrowRight } from '../../assets/icons';
import { useRouter } from 'next/dist/client/router';
import HeadingTitle from '../slices/HeadingTitle';
import Tag from '../utils/Tag';

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
  tags: string[];
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  id,
  uid,
  title,
  tags,
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
          First Commit on {new Date(projectInit).toDateString()}
        </span>
      </div>
      <div className="flex py-5 justify-center">
        <img
          src={thumbnail.url}
          alt={thumbnail.alt ?? 'Project Thumbnail'}
          className="rounded-lg w-full object-cover h-200 md:h-full"
        />
      </div>
      <div className="py-5 break-words">
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

export default ProjectPreview;
