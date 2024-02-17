import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
