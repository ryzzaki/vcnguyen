import Prismic from 'prismic-javascript';

const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY as string;
const accessToken = process.env.PRISMIC_API_KEY || undefined;

export const PrismicClient = () => Prismic.client(apiEndpoint, { accessToken });
