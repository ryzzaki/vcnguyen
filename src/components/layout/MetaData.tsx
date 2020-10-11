import React from 'react';
import Head from 'next/head';

type MetaDataProps = {
  title: string;
};

const MetaData: React.FC<MetaDataProps> = ({ title }: MetaDataProps) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon-16x16.png"
    />
    <link rel="manifest" href="/site.webmanifest" />
    <meta
      name="description"
      content="Welcome to my completely incoherent blog & portfolio site. Have fun."
    />
    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content="Welcome to my completely incoherent blog & portfolio site. Have fun."
    />
    <meta property="og:locale" content="en_UK" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vcnguyen.me" />
    <meta
      property="og:image"
      content="https://vcnguyen.me/static/favicon.png"
    />
    <meta property="og:site_name" content="Blog & Portfolio | Cuong Nguyen" />
  </Head>
);

export default MetaData;
