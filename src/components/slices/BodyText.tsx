import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { htmlSerializer } from '../../utils/htmlSerializer';

type BodyTextProps = {
  text: RichTextBlock[];
};

const BodyText: React.FC<BodyTextProps> = ({ text }: BodyTextProps) => (
  <RichText render={text} htmlSerializer={htmlSerializer} />
);

export default BodyText;
