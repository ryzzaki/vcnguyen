import React, { DetailedReactHTMLElement } from 'react';
import { Elements } from 'prismic-reactjs';

// -- Function to add unique key to props
const propsWithUniqueKey = (props: any, key: string) =>
  Object.assign(props || {}, { key });

// -- HTML Serializer
export const htmlSerializer = (
  type: Elements,
  element: any,
  content: string,
  children: React.ReactNode[],
  key: string
): DetailedReactHTMLElement<any, HTMLElement> | null => {
  let props = {};

  switch (type) {
    case Elements.heading1: // Heading 1
      return React.createElement(
        'h1',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading2: // Heading 2
      return React.createElement(
        'h2',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading3: // Heading 3
      return React.createElement(
        'h3',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading4: // Heading 4
      return React.createElement(
        'h4',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading5: // Heading 5
      return React.createElement(
        'h5',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading6: // Heading 6
      return React.createElement(
        'h6',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.paragraph: // Paragraph
      return React.createElement(
        'p',
        propsWithUniqueKey({ className: 'py-10' }, key),
        children
      );

    case Elements.preformatted: // Preformatted
      return React.createElement(
        'pre',
        propsWithUniqueKey({ className: 'bg-black' }, key),
        children
      );

    case Elements.strong: // Strong
      return React.createElement(
        'strong',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.em: // Emphasis
      return React.createElement(
        'em',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.listItem: // Unordered List Item
      return React.createElement(
        'li',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.oListItem: // Ordered List Item
      return React.createElement(
        'li',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.list: // Unordered List
      return React.createElement(
        'ul',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.oList: // Ordered List
      return React.createElement(
        'ol',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.image: // Image
      const linkUrl = element.linkTo ? element.linkTo.url : null;
      const linkTarget =
        element.linkTo && element.linkTo.target
          ? { target: element.linkTo.target }
          : {};
      const linkRel = linkTarget.target ? { rel: 'noopener' } : {};
      const img = React.createElement('img', {
        src: element.url,
        alt: element.alt || '',
      });
      return React.createElement(
        'p',
        propsWithUniqueKey(
          { className: [element.label || '', 'block-img'].join(' ') },
          key
        ),
        linkUrl
          ? React.createElement(
              'a',
              Object.assign({ href: linkUrl }, linkTarget, linkRel) as any,
              img
            )
          : img
      );

    case Elements.embed: // Embed
      props = Object.assign(
        {
          ...props,
          'data-oembed': element.oembed.embed_url,
          'data-oembed-type': element.oembed.type,
          'data-oembed-provider': element.oembed.provider_name,
        },
        element.label ? { className: element.label } : {}
      );
      const embedHtml = React.createElement('div', {
        dangerouslySetInnerHTML: { __html: element.oembed.html },
      });
      return React.createElement(
        'div',
        propsWithUniqueKey(props, key),
        embedHtml
      );

    case Elements.hyperlink: // Image
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = Object.assign(
        {
          ...props,
          href: element.data.url,
        },
        targetAttr,
        relAttr
      );
      return React.createElement('a', propsWithUniqueKey(props, key), children);

    case Elements.label: // Label
      props = element.data
        ? Object.assign({ ...props }, { className: element.data.label })
        : { ...props };
      return React.createElement(
        'span',
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.span: // Span
      return content
        ? content.split('\n').reduce((acc: any, p: any) => {
            if (acc.length === 0) {
              return [p];
            } else {
              const brIndex = (acc.length + 1) / 2 - 1;
              const br = React.createElement(
                'br',
                propsWithUniqueKey({}, brIndex.toString())
              );
              return acc.concat([br, p]);
            }
          }, [])
        : null;

    default:
      return null;
  }
};