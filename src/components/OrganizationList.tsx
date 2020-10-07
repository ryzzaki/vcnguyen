import Link from 'next/link';
import React from 'react';
import { DXH, Qmul } from '../assets/icons';

const organizations = [
  {
    icon: <Qmul />,
    link: 'https://www.qmul.ac.uk/',
    alt: 'Queen Mary, University of London',
  },
  {
    icon: <DXH />,
    link: 'https://dxheroes.io/',
    alt: 'DX Heroes | Developer Experience',
  },
];

const OrganizationList: React.FC = () => (
  <div className="py-20">
    <ul className="flex flex-row flex-wrap justify-center items-center">
      {organizations.map((org) => {
        return (
          <li key={org.alt} className="flex p-20">
            <Link href={org.link}>
              <a
                className="flex tooltip hover:cursor-pointer justify-center"
                target="_blank"
              >
                <span className="tooltip-text bg-black rounded -mt-45 transition duration-300 ease-in-out">
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

export default OrganizationList;
