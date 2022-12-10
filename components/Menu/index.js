import T from 'prop-types';
import { useIntl } from 'react-intl';
import { ROUTES } from '../../common/constants';
import Logo from '../Logo';
import MenuLink from './MenuLink';
import style from './style.module.scss';

const Menu = ({ activeRoute }) => {
  const intl = useIntl();
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <Logo className={style['menu-logo']} />
        </div>
        <ul className={style['nav-links']}>
          <input
            className={style.checkbox}
            type="checkbox"
            id="checkbox_toggle"
          />

          <label htmlFor="checkbox_toggle" className={style.hamburger}>
            &#9776;
          </label>

          <div className={style.menu}>
            <MenuLink
              isActive={activeRoute ? activeRoute == ROUTES.INDEX : true}
              url={ROUTES.INDEX}
              text={intl.formatMessage({ id: 'menu-item.label.home' })}
            />
            <MenuLink
              url={ROUTES.BLANK}
              text={intl.formatMessage({ id: 'menu-item.label.academy' })}
            />
            <MenuLink
              url={ROUTES.BLANK}
              text={intl.formatMessage({ id: 'menu-item.label.magasine' })}
            />
            <MenuLink
              url={ROUTES.BLANK}
              text={intl.formatMessage({ id: 'menu-item.label.partners' })}
            />
            <MenuLink
              url={ROUTES.BLANK}
              text={intl.formatMessage({ id: 'menu-item.label.about' })}
            />
            <MenuLink
              url={ROUTES.BLANK}
              text={intl.formatMessage({ id: 'menu-item.label.contacts' })}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

Menu.propTypes = {
  activeRoute: T.string,
};

export default Menu;
