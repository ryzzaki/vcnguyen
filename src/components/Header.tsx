import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="w-full py-15 px-30 md:pt-35 md:px-25 mx-auto max-w-1000 xl:px-80">
    <div className="flex items-center justify-center text-14 md:text-20 border-b">
      <div className="flex font-bold pr-15 md:pr-40 mr-auto">
        <Link href="/">
          <a className="transition duration-300 ease-in-out hover:text-lightblue">
            Cuong Nguyen
          </a>
        </Link>
      </div>
      <ul className="flex py-10">
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
        <li className="pl-5 transition duration-300 ease-in-out hover:text-lightblue">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
