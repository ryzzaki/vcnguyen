import React from 'react';

type TagProps = {
  tag: string;
};

const Tag: React.FC<TagProps> = ({ tag }: TagProps) => (
  <span className="bg-lightblue px-10 mr-5 mb-5 rounded-md bg-opacity-25 text-12 md:text-16">
    {tag}
  </span>
);

export default Tag;
