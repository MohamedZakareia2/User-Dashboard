import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/login.scss';
import '../styles/dashboard.scss';
import '../styles/user.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
