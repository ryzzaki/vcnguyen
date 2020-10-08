import Link from 'next/link';
import React from 'react';
import { Github, Instagram, LinkedIn, Mail, Twitter } from '../assets/icons';

const socials = [
  {
    icon: (
      <LinkedIn className="transform scale-150 hover:scale-200 transition duration-300" />
    ),
    link: 'https://www.linkedin.com/in/viet-cuong-nguyen/',
    alt: `Let's get serious on LinkedIn`,
  },
  {
    icon: (
      <Mail className="transform scale-150 hover:scale-200 transition duration-300" />
    ),
    link: 'mailto:cuong.nguyen@outlook.cz',
    alt: 'Send me a love letter',
  },
  {
    icon: (
      <Github className="transform scale-150 hover:scale-200 transition duration-300" />
    ),
    link: 'https://github.com/ryzzaki',
    alt: 'Check out the source code',
  },
  {
    icon: (
      <Twitter className="transform scale-150 hover:scale-200 transition duration-300" />
    ),
    link: 'https://twitter.com/vcngng',
    alt: 'Read my dumb Tweets',
  },
  {
    icon: (
      <Instagram className="transform scale-150 hover:scale-200 transition duration-300" />
    ),
    link: 'https://www.instagram.com/cng_ng/',
    alt: 'See my personal life?',
  },
];

const ContactList: React.FC = () => (
  <div className="py-20">
    <ul className="flex flex-row flex-wrap justify-center items-center">
      {socials.map((org) => {
        return (
          <li key={org.alt} className="flex p-30">
            <Link href={org.link}>
              <a
                className="flex tooltip hover:cursor-pointer justify-center"
                target="_blank"
              >
                <span className="tooltip-text bg-black rounded -mt-50 transition duration-300 ease-in-out">
                  {org.alt}
                </span>
                {org.icon}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default ContactList;
