import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ProfileIconLink } from "../../myLink";

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
            key={myLink.to + myLink.children}
            to={myLink.to}
          >
            <MenuItem
              onClick={
                myLink.children == "Logout" ? handleLogout : handleCloseUserMenu
              }
            >
              <myLink.icon />
              <Typography sx={{ p: 1 }} textAlign="center">
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
