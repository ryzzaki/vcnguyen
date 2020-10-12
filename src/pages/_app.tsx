import type { AppProps } from 'next/app';
import '../assets/styles/main.css';

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
