import Image from 'next/image';
import T from 'prop-types';

const imageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q${quality || 5}`;
};

const Logo = ({ className }) => {
  return (
    <Image
      className={className}
      loader={imageLoader}
      src={'icon_white.svg'}
      alt={'Logo elite'}
      width={50}
      height={60}
    />
  );
};

Logo.propTypes = {
  className: T.string,
};

export default Logo;
