import MainContainer from '../components/containers/MainContainer';
import React, { useEffect, useState } from 'react';
import TechStackList from '../components/TechStackList';
import OrganizationList from '../components/OrganizationList';
import { PrismicClient } from './api/prismic';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from '../components/slices/BodyText';
import HeadingTitle from '../components/slices/HeadingTitle';
import PostLoader from '../components/utils/PostLoader';

const IndexPage: React.FC = () => {
  const [data, setData] = useState<{
    intro_title: RichTextBlock[];
    intro_description: RichTextBlock[];
    techstack_title: RichTextBlock[];
    organizations_title: RichTextBlock[];
  }>();

  useEffect(() => {
    const client = PrismicClient();
    client.getSingle('landing_page', {}).then((res) => {
      const responseData = res?.data;
      setData({
        intro_title: responseData?.intro_title,
        intro_description: responseData?.intro_description,
        techstack_title: responseData?.techstack_title,
        organizations_title: responseData?.organizations_title,
      });
    });
  }, []);

  return (
    <MainContainer title="Portfolio & Blog | Cuong Nguyen" theme="dark">
      {data ? (
        <div className="flex flex-col items-left mx-auto">
          <section className="py-20 my-20">
            <HeadingTitle title={data.intro_title} leftAlign={false} />
            <div className="py-10 text-center md:text-left text-20 md:text-24">
              <BodyText text={data.intro_description} />
            </div>
          </section>
          <section className="pb-20 my-20">
            <HeadingTitle title={data?.techstack_title} leftAlign={false} />
            <TechStackList />
          </section>
          <section className="pb-20 my-20">
            <HeadingTitle title={data.organizations_title} leftAlign={false} />
            <OrganizationList />
          </section>
        </div>
      ) : (
        <PostLoader />
      )}
    </MainContainer>
  );
};

export default IndexPage;
