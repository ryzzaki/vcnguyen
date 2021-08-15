import Link from 'next/link';
import React from 'react';
import { Applifting, DXH, QMUL, UCL } from '../assets/icons';

const organizations = [
  {
    icon: <UCL />,
    link: 'https://www.ucl.ac.uk/',
    alt: 'University College London',
  },
  {
    icon: <QMUL />,
    link: 'https://www.qmul.ac.uk/',
    alt: 'Queen Mary, University of London',
  },
  {
    icon: <Applifting className="text-white fill-current" />,
    link: 'https://applifting.io/',
    alt: 'Applifting | Software House',
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
                <span className="tooltip-text text-offwhite bg-black rounded -mt-45 transition duration-300 ease-in-out">
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
