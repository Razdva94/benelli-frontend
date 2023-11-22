import { Metadata } from 'next';
import '@/vendor/fonts.css';
import '@/vendor/normalize.css';
import './globals.scss';
import { SessionProviders } from '@/components/SessionProviders/SessionProviders';
import Header from '@/components/Header/Header';
import mainStyles from './main.module.scss';
import Footer from '@/components/Footer/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Мотоциклы Benelli Купить Отзывы и Цена Производитель и Модели Stels',
  description:
    'Benelli Leoncino 500 и 800 теперь доступны в Санкт-Петербурге. Посетите наш магазин и купите этот стильный мотоцикл. Лучшие цены и условия',
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
        <link rel='icon' href='./images/favicon.png' type='image/png' />
      </head>
      <SessionProviders>
        <body>
          <Header />
          <main className={mainStyles.main}>{children}</main>
          <Footer />
          <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-CE8SQL4WKR'
          ></Script>
          <Script>
            {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CE8SQL4WKR');
  `}
          </Script>
          <Script strategy='beforeInteractive'>
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(95643453, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  ecommerce:"dataLayer"
              });
            `}
          </Script>
        </body>
      </SessionProviders>
    </html>
  );
}
