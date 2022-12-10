import Link from 'next/link';
import T from 'prop-types';
import style from './style.module.scss';

const MenuItem = ({ isActive, text, url }) => {
  return (
    <li className={isActive ? style.active : null}>
      <Link href={url}>{text}</Link>
    </li>
  );
};

MenuItem.propTypes = {
  isActive: T.bool,
  text: T.string.isRequired,
  url: T.string.isRequired,
};

export default MenuItem;
