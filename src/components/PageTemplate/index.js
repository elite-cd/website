import T from 'prop-types';
import * as React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import * as style from './style.module.scss';
const Page = ({ children, activeRoute }) => {
  return (
    <div className={style.page}>
      <Menu activeRoute={activeRoute} />
      {children}
      <Footer />
    </div>
  );
};

Page.propTypes = {
  children: T.any,
};

export default Page;
