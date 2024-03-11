import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import PropTypes from "prop-types";

const AdminGuard = ({ children }) => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  if (userData && userData.isAdmin) {
    return children;
  } else {
    return <Navigate to={ROUTES.HOME} replace={true} />;
  }
};

AdminGuard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminGuard;
