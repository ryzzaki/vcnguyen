import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

type HeadingTitleProps = {
  title: RichTextBlock[];
};

const HeadingTitle: React.FC<HeadingTitleProps> = ({
  title,
}: HeadingTitleProps) => (
  <div className="font-semibold py-10 text-24 md:text-32">
    <RichText render={title} />
  </div>
);

export default HeadingTitle;
