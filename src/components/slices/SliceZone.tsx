import React from 'react';
import BodyText from './BodyText';

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
              <code key={i}>
                {content.items?.pop()?.code_slice?.pop()?.text}
              </code>
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
