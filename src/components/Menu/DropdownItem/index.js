import { Link } from 'gatsby';
import T from 'prop-types';
import * as React from 'react';
import * as style from '../Menu.module.scss';

const DropdownItem = ({ isActive, text, links, url }) => {
  return (
    <li className={style.menugroup}>
      <Link to={url}>{text}</Link>
      <ul className={style.dropdown}>
        {links &&
          links.map((link, i) => {
            return (
              <li key={'link-' + i}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

DropdownItem.propTypes = {
  isActive: T.bool,
  text: T.string,
  links: T.array.isRequired,
  url: T.string.isRequired,
};

export default DropdownItem;
