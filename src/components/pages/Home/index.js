import { useIntl } from 'gatsby-plugin-intl';
import T from 'prop-types';
import * as React from 'react';
import Carousel from '../../Carousel';
import Menu from '../../Menu';
import * as style from './Home.module.scss';

const Home = ({ carouselItems }) => {
  const intl = useIntl();
  return (
    <div className={style.container}>
      <Menu />
      <Carousel items={carouselItems} />
      <div className={style.row__center}>
        <h3 className={style.typography3}>
          {intl.formatMessage({ id: 'content.homepage.elite.title' })}
          <span className={style.sitename}>
            {intl.formatMessage({ id: 'sitename' })}
          </span>
        </h3>
        <p className={style.typography6}>
          {intl.formatMessage({ id: 'content.homepage.elite.decription' })}
        </p>
      </div>
    </div>
  );
};

Home.propTypes = {
  carouselItems: T.array,
};

export default Home;
