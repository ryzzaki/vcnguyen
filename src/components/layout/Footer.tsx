import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="flex flex-col text-center items-center w-full font-roboto py-25 px-10">
    <div className="font-semibold text-white text-14">
      Wow you made it to the very end 😮
    </div>
    <div className="text-lightgrey text-14 hover:text-lightblue transition duration-300 ease-in-out">
      <Link href="https://www.instagram.com/cng_ng/">
        <a target="_blank">@cng_ng</a>
      </Link>
    </div>
    <div className="p-15 md:p-0 mt-10 md:mt-0 text-lightgrey text-10">
      MIT Licensed | Made with ♥️ using Next.js
    </div>
  </footer>
);

export default Footer;
