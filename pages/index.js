import Head from 'next/head';
import Project from '../components/project';
import projects from '../lib/projects';

const isLast = (index, items) => ( index + 1 === items.length );

export default () => (
  <div className="wrapper center pv4">
    <Head>
      <title>max.wtf</title>
      <meta charset="utf-8" />
      <meta content="width=device-width" name="viewport" />

      <link rel="stylesheet" href="https://unpkg.com/normalize.css@5.0.0/normalize.css" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css" />
      <link rel="stylesheet" href="https://cloud.typography.com/6040332/6195572/css/fonts.css" />
    </Head>

    {
      projects.map((project, index) => (
        <div className={ !isLast(index, projects) && 'mb4' } key={ index }>
          <Project project={ project } />
        </div>
      ))
    }

    <style jsx>{`
      .wrapper {
        max-width: 1200px;
      }
    `}</style>

    <style jsx global>{`
      body {
        background: #F8F8F8;
        color: #1A1A1A;
        font-family: "Gotham Rounded A", -apple-stytem, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      }
    `}</style>
  </div>
);
