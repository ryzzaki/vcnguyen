import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md p-15 pb-30 mt-15 md:mt-25 md:pt-15 md:px-25 md:sticky mx-auto max-w-6xl xl:px-80 z-10 top-0">
      <div className="flex items-center">
        <div className="font-medium text-18 md:text-34 text-black pl-5 md:pl-20 pr-15 md:pr-40">
          <Link href="/">
            <a className="transition duration-300 ease-in-out hover:text-lightblue">
              Portfolio
            </a>
          </Link>
        </div>
        <ul className="flex mr-auto text-14 md:text-20 items-left">
          <li className="mr-15 pl-5 md:mr-30 transition duration-300 ease-in-out hover:text-lightblue">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="mr-15 pl-5 md:mr-30 transition duration-300 ease-in-out hover:text-lightblue">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="mr-15 pl-5 md:mr-30 transition duration-300 ease-in-out hover:text-lightblue">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
