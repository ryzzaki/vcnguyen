import Prismic from 'prismic-javascript';

const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY as string;
const accessToken = process.env.PRISMIC_API_KEY || undefined;

export const PrismicClient = () => Prismic.client(apiEndpoint, { accessToken });

export const PrismicQuery = (type: 'blog_post' | 'project_post') =>
  Prismic.Predicates.at('document.type', type);
