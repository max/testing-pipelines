import Image from '../components/image';

export default ({ project }) => (
  <div>
    <div className="comp">
      <Image
        alt={ project.title }
        height={ project.height }
        src={ project.src }
        width={ project.width } />
    </div>

    <div className="flex mt2">
      <div>{ project.title }</div>
    </div>

    <style jsx>{`
      .comp {
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
      }
    `}</style>
  </div>
);
