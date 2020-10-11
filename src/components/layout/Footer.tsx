import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="flex flex-col bg-mirage text-center items-center w-full py-25 mt-60 px-10">
    <div className="font-semibold text-white text-12 md:text-14">
      Wow you made it to the very end 😮
    </div>
    <div className="text-lightgrey text-12 md:text-14">
      &copy; 2020 by{' '}
      <Link href="https://www.instagram.com/cng_ng/">
        <a
          target="_blank"
          className="hover:text-lightblue transition duration-300 ease-in-out"
        >
          Cuong Nguyen
        </a>
      </Link>
      . Colour Palette by{' '}
      <Link href="https://www.instagram.com/liolio.ness/">
        <a
          target="_blank"
          className="hover:text-lightblue transition duration-300 ease-in-out"
        >
          Julie Nguyen Lev
        </a>
      </Link>
      . All rights reserved.
    </div>
    <div className="pb-15 pt-0 text-lightgrey text-10">
      MIT Licensed | Made with ♥️ using Next.js
    </div>
  </footer>
);

export default Footer;
