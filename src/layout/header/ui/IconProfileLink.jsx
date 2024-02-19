import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ProfileIconLink } from "../../myLink";

const IconProfileLink = ({ loggedIn, onLogout, onCloseUserMenu }) => {
  const handleLogout = () => {
    onLogout();
  };
  const handleCloseUserMenu = () => {
    onCloseUserMenu();
  };

  return (
    <Fragment>
      {loggedIn &&
        ProfileIconLink.map((myLink) => (
          <NavLink key={myLink.to + myLink.children} to={myLink.to}>
            <MenuItem
              onClick={
                myLink.children == "Logout" ? handleLogout : handleCloseUserMenu
              }
            >
              <Typography textAlign="center">{myLink.children}</Typography>
            </MenuItem>
          </NavLink>
        ))}
    </Fragment>
  );
};

IconProfileLink.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCloseUserMenu: PropTypes.func.isRequired,
};

export default IconProfileLink;
