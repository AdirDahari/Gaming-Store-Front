import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ProfileIconLink } from "../../myLink";
import nextId from "react-id-generator";

const ProfileMenuItems = ({ loggedIn, onLogout, onCloseUserMenu }) => {
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
          <NavLink
            style={{ textDecoration: "none" }}
            key={nextId()}
            to={myLink.to}
          >
            <MenuItem
              onClick={
                myLink.children == "Logout" ? handleLogout : handleCloseUserMenu
              }
            >
              <myLink.icon sx={{ color: "#282C35" }} />
              <Typography sx={{ p: 1, color: "#282C35" }} textAlign="center">
                {myLink.children}
              </Typography>
            </MenuItem>
          </NavLink>
        ))}
    </Fragment>
  );
};

ProfileMenuItems.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCloseUserMenu: PropTypes.func.isRequired,
};

export default ProfileMenuItems;
