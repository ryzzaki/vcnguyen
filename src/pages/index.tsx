import MainContainer from '../components/containers/MainContainer';
import React, { useEffect, useState } from 'react';
import TechStackList from '../components/TechStackList';
import OrganizationList from '../components/OrganizationList';
import { PrismicClient } from './api/prismic';
import { RichText } from 'prismic-reactjs';
import BodyText from '../components/slices/BodyText';

const IndexPage: React.FC = () => {
  const [data, setData] = useState({
    intro_title: [],
    intro_description: [],
    techstack_title: [],
    organizations_title: [],
  });

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
    <MainContainer title="Portfolio" theme="dark">
      <div className="flex flex-col items-left mx-auto">
        <section className="py-20 my-20">
          <div className="font-semibold py-10 text-24 md:text-32">
            <RichText render={data.intro_title} />
          </div>
          <div className="py-10 text-18 md:text-24">
            <BodyText text={data.intro_description} />
          </div>
        </section>
        <section className="pb-20 my-20">
          <div className="font-semibold py-10 text-24 md:text-32">
            <RichText render={data.techstack_title} />
          </div>
          <TechStackList />
        </section>
        <section className="pb-20 my-20">
          <div className="font-semibold py-10 text-24 md:text-32">
            <RichText render={data.organizations_title} />
          </div>
          <OrganizationList />
        </section>
      </div>
    </MainContainer>
  );
};

export default IndexPage;
