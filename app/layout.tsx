import { Metadata } from 'next';
import '@/vendor/fonts.css';
import '@/vendor/normalize.css';
import './globals.scss';
import { SessionProviders } from '@/components/SessionProviders/SessionProviders';
import Header from '@/components/Header/Header';
import mainStyles from './main.module.scss';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Мотоциклы Benelli Купить Отзывы и Цена Производитель и Модели Stels',
  description: 'Benelli Leoncino 500 и 800 теперь доступны в Санкт-Петербурге. Посетите наш магазин и купите этот стильный мотоцикл. Лучшие цены и условия',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
        <SessionProviders>
          <head>
            <meta name='yandex-verification' content='fe483d98bcc96f41' />
          </head>
          <body>
            <Header />
            <main className={mainStyles.main}>{children}</main>
            <Footer />
          </body>
        </SessionProviders>
    </html>
  );
}
