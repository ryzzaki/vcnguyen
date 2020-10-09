import React from 'react';
import BodyText from './BodyText';
import CodeSnippet from './CodeSnippet';

// @To-do: improve this type
type SliceZoneProps = {
  body: {
    slice_type: 'code' | 'rich_text';
    items: [];
  }[];
};

const SliceZone: React.FC<SliceZoneProps> = ({ body }: SliceZoneProps) => (
  <>
    {body &&
      body.map((content: any, i: any) => {
        switch (content.slice_type) {
          case 'code':
            return (
              <CodeSnippet
                key={i}
                markdownContent={content.items?.pop()?.code_slice?.pop()?.text}
              />
            );
          case 'rich_text':
            return <BodyText key={i} text={content.items?.pop()?.text_slice} />;
          default:
            return null;
        }
      })}
  </>
);

export default SliceZone;
