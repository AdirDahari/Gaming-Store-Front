import Footer from "./footer/Footer";
import NavigationBar from "./header/NavigationBar";
import Main from "./main/Main";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
