import MainContainer from '../components/containers/MainContainer';
import React from 'react';
import TechStackList from '../components/TechStackList';
import OrganizationList from '../components/OrganizationList';

const IndexPage = () => (
  <MainContainer title="Portfolio" theme="dark">
    <div className="flex flex-col items-left mx-auto">
      <div className="py-20 my-20">
        <h2 className="font-semibold py-10 text-24 md:text-32">
          Hello there! 👋
        </h2>
        <p className="py-10 text-18 md:text-24">
          I am a student at Queen Mary, University of London where I currently
          read BSc. Economics. I also work as a Software Engineer for a startup
          in 📍Prague.
        </p>
      </div>
      <div className="pb-20 my-20">
        <h2 className="font-semibold py-10 text-24 md:text-32">
          Tech Stack of Choice 😉
        </h2>
        <TechStackList />
      </div>
      <div className="pb-20 my-20">
        <h2 className="font-semibold py-10 text-24 md:text-32">
          Places where I've spent my time
        </h2>
        <OrganizationList />
      </div>
    </div>
  </MainContainer>
);

export default IndexPage;
