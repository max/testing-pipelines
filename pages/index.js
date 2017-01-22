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
        <img key={ index } src={ `/static/images/${comp}.jpg` } />
      ))
    }

    <style jsx>{`
      img {
        display: block;
      }
    `}</style>
  </div>
);
