import React, { ReactNode } from 'react';
import MetaData from '../layout/MetaData';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

type ContainerProps = {
  children?: ReactNode;
  title?: string;
  theme?: 'dark' | 'light';
  toggleNav?: boolean;
};

const MainContainer: React.FC<ContainerProps> = ({
  children,
  title = 'Cuong Nguyen',
  theme = 'dark',
  toggleNav = true,
}: ContainerProps) => (
  <div
    className={`font-roboto text-${
      theme === 'light' ? 'black' : 'verylightgrey'
    } bg-${theme === 'light' ? 'white' : 'mirage'}`}
  >
    <MetaData title={title} />
    {toggleNav && <Header />}
    <main className="flex flex-col min-h-screen py-20 px-30 md:p-25 mx-auto max-w-1000 xl:px-80">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainContainer;
