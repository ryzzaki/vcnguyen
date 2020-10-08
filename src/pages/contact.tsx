import MainContainer from '../components/containers/MainContainer';
import React from 'react';

import ContactList from '../components/ContactList';

const ContactPage: React.FC = () => (
  <MainContainer title="Contact | Cuong Nguyen" theme="dark">
    <div className="flex flex-col items-left mx-auto">
      <section className="py-20">
        <div className="font-semibold py-10 text-24 md:text-32">
          I am open to freelancing... sort of... 🤷‍♂️
        </div>
        <div className="pt-10 pb-30 text-18 md:text-24">
          As much as I'd like to make your $1 million dollar{' '}
          <i>'hey man, it's like Tinder but for cats'</i> app - I am afraid that
          I simply don't have the time for your big budget project. I am
          currently too pre-oocupied with my university degree and my current
          job at Applifting.
          <br /> <br />
          <b>BUT!</b>
          <br /> <br />
          If you need a static website or smaller scale projects done swiftly,
          feel free to contact me.
        </div>
        <div className="font-semibold pt-20 pb-10 text-24 md:text-32">
          The Glorious Social Pentatonic 👇
        </div>
        <ContactList />
      </section>
    </div>
  </MainContainer>
);

export default ContactPage;
