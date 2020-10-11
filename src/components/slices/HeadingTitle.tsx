import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

type HeadingTitleProps = {
  title: RichTextBlock[];
  leftAlign?: boolean;
};

const HeadingTitle: React.FC<HeadingTitleProps> = ({
  title,
  leftAlign = true,
}: HeadingTitleProps) => (
  <div
    className={`font-heading text-${
      leftAlign ? 'left' : 'center'
    } text-offwhite md:text-left py-10 text-24 md:text-36`}
  >
    <RichText render={title} />
  </div>
);

export default HeadingTitle;
