import MainContainer from '../components/containers/MainContainer';
import React from 'react';
import TechStackList from '../components/TechStackList';
import OrganizationList from '../components/OrganizationList';

const ProjectsPage = () => (
  <MainContainer title="Portfolio" theme="dark">
    <div className="flex flex-col items-left mx-auto">
      <div className="py-20 my-20">
        <h2 className="font-semibold py-10 text-32">
          Projects that I've helped create 🎉
        </h2>
        <p className="py-10 text-24">
          Are you interested in the quality of my work? Congratulations, you
          came to the right place.
          <br />
          <br />
          Quite unfortunately though, a fraction of these projects are under the
          obligations of a signed Non-Disclosure Agreement.
          <br />
          <br />
          <b>However</b>, this portfolio page also includes all of my personal
          projects that I've worked on outside of university and work. Some of
          them are still a Work in Progress, some have been put on hold due to
          various blockers, and some have never made it past their MVP phase.
          Regardless, I hope you have as much fun trying them out (provided that
          they still work, <i>yikes</i>) as I have had whilst coding these.
        </p>
        <p className="text-20">
          <b>tl;dr:</b> I can't disclose the specifics of certain projects
          because I'll get sued to oblivion, but do check my solo projects -
          those just contain stolen code from <i>stackoverflow</i>.
        </p>
      </div>
      <div className="pb-20 my-20">
        <h2 className="font-semibold py-10 text-32">Work Projects</h2>
        <TechStackList />
      </div>
      <div className="pb-20 my-20">
        <h2 className="font-semibold py-10 text-32">Solo Projects</h2>
        <OrganizationList />
      </div>
      <div className="pb-20 my-20">
        <h2 className="font-semibold py-10 text-32">Spaghetti Code</h2>
        <OrganizationList />
      </div>
      <div className="pb-20 my-20">
        <h2 className="font-semibold py-10 text-32">
          Concepts that will never see the day of light
        </h2>
        <OrganizationList />
      </div>
    </div>
  </MainContainer>
);

export default ProjectsPage;
