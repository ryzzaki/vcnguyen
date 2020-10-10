import React, { ReactNode, useEffect } from 'react';
import MetaData from '../layout/MetaData';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { initGA, logPageView } from '../../utils/analytics';

type ContainerProps = {
  children?: ReactNode;
  title?: string;
  theme?: 'dark' | 'light';
  toggleNav?: boolean;
};

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

const MainContainer: React.FC<ContainerProps> = ({
  children,
  title = 'Cuong Nguyen',
  theme = 'dark',
  toggleNav = true,
}: ContainerProps) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div
      className={`font-main text-verylightgrey bg-${
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
};

export default MainContainer;
