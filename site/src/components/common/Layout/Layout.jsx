import { any, bool } from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

import s from './Layout.module.scss';

const Layout = ({ children, withFooter }) => (
  <>
    <Header />
    <div className={s.wrapper}>{children}</div>
    {withFooter && <Footer />}
  </>
);

Layout.propTypes = {
  children: any,
  withFooter: bool,
};

Layout.defaultProps = {
  withFooter: true,
};

export default Layout;
