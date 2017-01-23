import Head from 'next/head';
import Image from '../components/image';

const comps = [
  'cli',
  'dashboard-v1',
  'dashboard-v2',
  'slider',
  'status',
  'button',
  'dropbox',
  'concept',
  'preview',
  'screenshots'
];

const isLast = (index, items) => ( index + 1 === items.length );

export default () => (
  <div className="wrapper center pv4">
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/normalize.css@5.0.0/normalize.css" />
    </Head>

    {
      comps.map((comp, index) => (
        <div className={ `comp ${!isLast(index, comps) && 'mb4'}` } key={ index }>
          <Image name={ comp } />
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

      img {
        display: block;
      }
    `}</style>
  </div>
);
