import React from 'react';
import BodyText from './BodyText';
import CodeSnippet from './CodeSnippet';

// @To-do: improve this type
type SliceZoneProps = {
  body: {
    slice_type: 'code' | 'rich_text';
    primary: [];
  }[];
};

const SliceZone: React.FC<SliceZoneProps> = ({ body }: SliceZoneProps) => (
  <>
    {body &&
      body.map((content: any, i: number) => {
        switch (content.slice_type) {
          case 'code':
            return (
              <CodeSnippet
                key={i}
                markdownContent={content.primary.code_slice.pop()?.text}
              />
            );
          case 'rich_text':
            return (
              <div key={i}>
                {content.primary.paragraph_title.length > 0 && (
                  <BodyText text={content.primary.paragraph_title} />
                )}
                <BodyText text={content.primary.text_slice} />
              </div>
            );
          default:
            return null;
        }
      })}
  </>
);

export default SliceZone;
