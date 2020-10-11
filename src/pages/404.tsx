import MainContainer from '../components/containers/MainContainer';
import React from 'react';

const NotFoundErrorPage: React.FC = () => (
  <MainContainer title="Page Not Found :( | Cuong Nguyen" theme="dark">
    <div className="text-center text-teal font-heading text-26 md:text-34 p-10">
      FOUR-O'-FOUR
    </div>
    <div className="text-center font-heading text-26 md:text-34 p-10">
      This page does not exist 😭
    </div>
    <div className="text-center font-heading text-26 md:text-34 p-10 pt-30">
      (╯°□°)╯︵ ┻━┻
    </div>
  </MainContainer>
);

export default NotFoundErrorPage;
