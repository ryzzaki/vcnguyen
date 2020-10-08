import Link from 'next/link';
import React from 'react';
import {
  TypeScript,
  JavaScript,
  Python,
  Java,
  Git,
  NestJS,
  ReactIcon,
  ReduxIcon,
  Tailwind,
  PostgreSQL,
  Redis,
  GraphQL,
  Docker,
  Nginx,
  Kubernetes,
  NodeIcon,
  Heroku,
} from '../assets/icons';

const stacks = [
  {
    icon: <TypeScript className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://www.typescriptlang.org/',
    alt: 'TypeScript',
  },
  {
    icon: <JavaScript className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://www.ecma-international.org/',
    alt: 'JavaScript',
  },
  {
    icon: <Python className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://www.python.org/',
    alt: 'Python',
  },
  {
    icon: <Java className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://www.java.com/',
    alt: 'Java',
  },
  {
    icon: <Git className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://git-scm.com/',
    alt: 'Git',
  },
  {
    icon: <NodeIcon className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://nodejs.org/',
    alt: 'NodeJS',
  },
  {
    icon: <NestJS className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://nestjs.com/',
    alt: 'NestJS',
  },
  {
    icon: <ReactIcon className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://reactjs.org/',
    alt: 'ReactJS',
  },
  {
    icon: <ReduxIcon className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://redux.js.org/',
    alt: 'Redux',
  },
  {
    icon: <Tailwind className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://tailwindcss.com/',
    alt: 'TailwindCSS',
  },
  {
    icon: <PostgreSQL className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://www.postgresql.org/',
    alt: 'PostgreSQL',
  },
  {
    icon: <Redis className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://redis.io/',
    alt: 'Redis',
  },
  {
    icon: <GraphQL className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://graphql.org/',
    alt: 'GraphQL',
  },
  {
    icon: <Docker className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://www.docker.com/',
    alt: 'Docker',
  },
  {
    icon: <Heroku className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://heroku.com/',
    alt: 'Heroku',
  },
  {
    icon: <Nginx className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://www.nginx.com/',
    alt: 'Nginx',
  },
  {
    icon: <Kubernetes className="w-40 h-40 md:w-80 md:h-80" />,
    link: 'https://kubernetes.io/',
    alt: 'Kubernetes',
  },
];

const TechStackList: React.FC = () => (
  <div className="py-5">
    <ul className="flex flex-row flex-wrap justify-center items-center">
      {stacks.map((stack) => {
        return (
          <li key={stack.alt} className="flex p-10 md:p-20">
            <Link href={stack.link}>
              <a
                target="_blank"
                className="flex tooltip hover:cursor-pointer justify-center"
              >
                <span className="tooltip-text bg-black rounded -mt-45 transition duration-300 ease-in-out">
                  {stack.alt}
                </span>
                {stack.icon}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default TechStackList;
