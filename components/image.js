const path = (name, suffix='') => {
  return `/static/images/${name}${suffix}.jpg`;
};

export default ({ name, alt }) => (
  <img alt={ alt } className='db' src={ path(name) } srcSet={ `${path(name)}, ${path(name, '@2x')} 2x` } />
);
