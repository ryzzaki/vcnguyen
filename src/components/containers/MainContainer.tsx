import React, { ReactNode } from 'react';
import MetaData from '../MetaData';
import Header from '../Header';
import Footer from '../Footer';

type ContainerProps = {
  children?: ReactNode;
  title?: string;
  toggleNav?: boolean;
};

const MainContainer: React.FC<ContainerProps> = ({
  children,
  title = 'Portfolio',
  toggleNav = true,
}: ContainerProps) => (
  <div className="font-roboto text-black">
    <MetaData title={title} />
    {toggleNav && <Header />}
    <main className="flex flex-col min-h-screen p-20 md:p-25 mx-auto max-w-6xl xl:px-80">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainContainer;
