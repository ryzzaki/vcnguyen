import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

type HeadingTitleProps = {
  title: RichTextBlock[];
};

const HeadingTitle: React.FC<HeadingTitleProps> = ({
  title,
}: HeadingTitleProps) => (
  <div className="font-heading text-center md:text-left py-10 text-24 md:text-36">
    <RichText render={title} />
  </div>
);

export default HeadingTitle;
