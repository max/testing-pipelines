import Image from '../components/image';

export default ({ project }) => (
  <div>
    <Image
      alt={ project.title }
      height={ project.height }
      src={ project.src }
      width={ project.width } />
  </div>
);
