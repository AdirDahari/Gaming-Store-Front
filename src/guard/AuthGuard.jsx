import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import PropTypes from "prop-types";

const AuthGuard = ({ children }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  if (loggedIn) {
    return children;
  } else {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
};

AuthGuard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthGuard;
