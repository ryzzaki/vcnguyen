import React, { ReactNode } from 'react';
import MetaData from '../MetaData';
import Header from '../Header';
import Footer from '../Footer';

type ContainerProps = {
  children?: ReactNode;
  title?: string;
  theme?: 'dark' | 'light';
  toggleNav?: boolean;
};

const MainContainer: React.FC<ContainerProps> = ({
  children,
  title = 'Portfolio',
  theme = 'light',
  toggleNav = true,
}: ContainerProps) => (
  <div
    className={`font-roboto text-verylightgrey bg-${
      theme === 'light' ? 'white' : 'mirage'
    }`}
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
