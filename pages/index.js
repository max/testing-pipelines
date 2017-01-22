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

export default () => (
  <div>
    <h1>My Work</h1>

    {
      comps.map((comp, index) => (
        <Image key={ index } name={ comp } />
      ))
    }

    <style jsx>{`
      img {
        display: block;
      }
    `}</style>
  </div>
);
