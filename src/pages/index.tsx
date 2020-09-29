import Link from 'next/link';
import MainContainer from '../components/containers/MainContainer';

const IndexPage = () => (
  <MainContainer title="Portfolio">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </MainContainer>
);

export default IndexPage;
