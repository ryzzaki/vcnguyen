import React from 'react';
import Link from 'next/link';
import { OpenBook, Send, Terminal, UserIcon } from '../../assets/icons';

const Header: React.FC = () => (
  <header className="w-full py-15 px-30 md:pt-35 md:px-25 mx-auto max-w-1000 xl:px-80">
    <div className="flex flex-wrap items-center justify-center text-14 md:text-20 border-b">
      <div className="flex font-bold pr-15 md:pr-40 md:mr-auto">
        <Link href="/">
          <a className="flex flex-row transition duration-300 ease-in-out hover:text-lightblue">
            <UserIcon className="mr-5" />
            Cuong Nguyen
          </a>
        </Link>
      </div>
      <ul className="flex py-10">
        <li className="mr-15 pl-5 md:mr-30 transition duration-300 ease-in-out hover:text-lightblue">
          <Link href="/blog">
            <a className="flex flex-row items-center">
              <OpenBook className="mr-5" />
              Blog
            </a>
          </Link>
        </li>
        <li className="mr-15 pl-5 md:mr-30 transition duration-300 ease-in-out hover:text-lightblue">
          <Link href="/project">
            <a className="flex flex-row items-center">
              <Terminal className="mr-5" />
              Projects
            </a>
          </Link>
        </li>
        <li className="pl-5 transition duration-300 ease-in-out hover:text-lightblue">
          <Link href="/contact">
            <a className="flex flex-row items-center">
              <Send className="mr-5" />
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
