import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="flex flex-col text-center items-center w-full font-roboto shadow-inner py-25 px-10 bg-verydarkgrey">
    <div className="font-semibold text-white text-14">Portfolio</div>
    <div className="pl-10 text-lightgrey hover:text-lightblue transition duration-300 ease-in-out">
      <Link href="https://www.instagram.com/cng_ng/">
        <a>&copy; 2020 | @cng_ng</a>
      </Link>
    </div>
    <div className="p-15 md:p-0 mt-10 md:mt-0 text-lightgrey text-10">
      MIT Licensed | Made with ♥️ using Next.js
    </div>
  </footer>
);

export default Footer;
