import MainContainer from '../components/containers/MainContainer';
import React, { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import { PrismicClient } from './api/prismic';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import BodyText from '../components/slices/BodyText';

const ContactPage: React.FC = () => {
  const [data, setData] = useState({
    intro_title: [] as RichTextBlock[],
    intro_description: [] as RichTextBlock[],
    contacts_title: [] as RichTextBlock[],
  });

  useEffect(() => {
    const client = PrismicClient();
    client.getSingle('contact_page', {}).then((res) => {
      const responseData = res?.data;
      setData({
        intro_title: responseData?.intro_title,
        intro_description: responseData?.intro_description,
        contacts_title: responseData?.contacts_title,
      });
    });
  }, []);

  return (
    <MainContainer title="Contact | Cuong Nguyen" theme="dark">
      <div className="flex flex-col items-left mx-auto">
        <section className="py-20">
          <div className="font-semibold py-10 text-24 md:text-32">
            <RichText render={data.intro_title} />
          </div>
          <div className="pt-10 pb-30 text-18 md:text-24">
            <BodyText text={data.intro_description} />
          </div>
          <div className="font-semibold pt-20 pb-10 text-24 md:text-32">
            <RichText render={data.contacts_title} />
          </div>
          <ContactList />
        </section>
      </div>
    </MainContainer>
  );
};

export default ContactPage;
