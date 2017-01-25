import Head from 'next/head';
import Image from '../components/image';

const comps = [
  { src: 'cli', title: 'Heroku CLI', height: 800, width: 1200 },
  { src: 'dashboard-v1', title: 'Heroku Dashboard V1', height: 972, width: 1200 },
  { src: 'dashboard-v2', title: 'Heroku Dashboard V2', height: 944, width: 1200 },
  { src: 'slider', title: 'Heroku Process Slider', height: 680, width: 1200 },
  { src: 'status', title: 'Heroku Status', height: 1507, width: 1200 },
  { src: 'button', title: 'Heroku Button', height: 1406, width: 1200 },
  { src: 'dropbox', title: 'Heroku Dropbox Sync', height: 594, width: 1200 },
  { src: 'concept', title: 'CloudApp Icon &amp; Concept', height: 795, width: 1200 },
  { src: 'preview', title: 'CloudApp Preview', height: 750, width: 1200 },
  { src: 'screenshots', title: 'CloudApp Screenshots', height: 150, width: 1200 }
];

const isLast = (index, items) => ( index + 1 === items.length );

export default () => (
  <div className="wrapper center pv4">
    <Head>
      <title>max.wtf</title>
      <meta charset="utf-8" />
      <meta content="width=device-width" name="viewport" />

      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/normalize.css@5.0.0/normalize.css" />
    </Head>

    {
      comps.map((comp, index) => (
        <div className={ `comp ${!isLast(index, comps) && 'mb4'}` } key={ index }>
          <Image
            alt={ comp.title }
            height={ comp.height }
            src={ comp.src }
            width={ comp.width } />
        </div>
      ))
    }

    <style jsx>{`
      .wrapper {
        max-width: 1200px;
      }

      .comp {
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
      }
    `}</style>

    <style jsx global>{`
      body {
        background: #F8F8F8;
      }
    `}</style>
  </div>
);
