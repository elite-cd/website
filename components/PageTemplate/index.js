import Head from 'next/head';
import T from 'prop-types';
import Footer from '../Footer';
import Menu from '../Menu';
import styles from './style.module.scss';
const Page = ({ children }) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Elite Académie</title>
        <meta name="description" content="Elite académie et magasine" />
        <link rel="icon" href="/icon_white.ico" />
      </Head>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

Page.propTypes = {
  activeRoute: T.string,
  children: T.any,
};

export default Page;
