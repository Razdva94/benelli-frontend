import { Metadata } from 'next';
import '@/vendor/fonts.css';
import '@/vendor/normalize.css';
import './globals.scss';
import Header from '@/components/Header/Header';
import mainStyles from './main.module.scss';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
          <head>
            <meta name='yandex-verification' content='fe483d98bcc96f41' />
          </head>
          <body>
            <Header />
            <main className={mainStyles.main}>{children}</main>
            <Footer />
          </body>
    </html>
  );
}
