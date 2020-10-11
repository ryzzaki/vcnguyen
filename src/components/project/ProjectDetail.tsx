import React from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from '../slices/BodyText';
import SliceZone from '../slices/SliceZone';
import Link from 'next/link';
import HeadingTitle from '../slices/HeadingTitle';
import Tag from '../utils/Tag';

type ProjectDetailProps = {
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
  dateCreated: Date;
  projectUrl: {
    url: string;
    target?: string;
  };
  body: {
    slice_type: 'code' | 'rich_text';
    primary: [];
  }[];
  tags: string[];
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  thumbnail,
  description,
  projectInit,
  dateCreated,
  projectUrl,
  body,
  tags,
}: ProjectDetailProps) => (
  <div className="py-20 w-full">
    <HeadingTitle title={title} />
    <div className="flex justify-center py-10">
      <img
        src={thumbnail.url}
        alt={thumbnail.alt ?? 'Project Thumbnail'}
        className="rounded-lg w-full object-fit h-200 md:h-full"
      />
    </div>
    <div className="break-words">
      <BodyText text={description} />
    </div>
    <div className="flex flex-row flex-wrap">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="text-12 md:text-14 md:pb-10">
        Posted on {new Date(dateCreated).toDateString()}
      </div>
      <div className="text-12 md:text-14 md:pb-10 md:ml-auto">
        First Commit on {new Date(projectInit).toDateString()}
      </div>
    </div>
    <div className="py-10 text-14 md:text-18 font-semibold">
      Project URL 👉
      <Link href={projectUrl.url}>
        <a
          target={projectUrl.target ?? ''}
          className="px-14 hover:underline hover:text-teal transition duration-300 ease-in-out"
        >
          {projectUrl.url}
        </a>
      </Link>
    </div>
    <div className="pt-10 pb-30">
      <SliceZone body={body} />
    </div>
  </div>
);

export default ProjectDetail;
