import MainContainer from '../components/containers/MainContainer';
import React, { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import { PrismicClient } from './api/prismic';
import { RichTextBlock } from 'prismic-reactjs';
import BodyText from '../components/slices/BodyText';
import HeadingTitle from '../components/slices/HeadingTitle';
import PostLoader from '../components/utils/PostLoader';

const ContactPage: React.FC = () => {
  const [data, setData] = useState<{
    intro_title: RichTextBlock[];
    intro_description: RichTextBlock[];
    contacts_title: RichTextBlock[];
  }>();

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
      {data ? (
        <div className="flex flex-col items-left mx-auto">
          <section className="py-20 my-20">
            <HeadingTitle title={data.intro_title} leftAlign={false} />
            <div className="pt-10 pb-30 text-18">
              <BodyText text={data.intro_description} />
            </div>
            <HeadingTitle title={data.contacts_title} leftAlign={false} />
            <ContactList />
          </section>
        </div>
      ) : (
        <PostLoader />
      )}
    </MainContainer>
  );
};

export default ContactPage;
