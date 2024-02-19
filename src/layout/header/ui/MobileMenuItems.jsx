import { Fragment } from "react";
import { GuestMobileLink, ProfileMobileLink } from "../../myLink";
import { NavLink } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MobileMenuItems = ({ loggedIn, onCloseNavMenu }) => {
  const handleCloseNavMenu = () => {
    onCloseNavMenu();
  };
  return (
    <Fragment>
      {loggedIn
        ? ProfileMobileLink.map((myLink) => (
            <NavLink key={myLink.children + myLink.to} to={myLink.to}>
              <MenuItem onClick={handleCloseNavMenu}>
                <myLink.icon />
                <Typography sx={{ p: 1 }} textAlign="center">
                  {myLink.children}
                </Typography>
              </MenuItem>
            </NavLink>
          ))
        : GuestMobileLink.map((myLink) => (
            <NavLink key={myLink.children + myLink.to} to={myLink.to}>
              <MenuItem onClick={handleCloseNavMenu}>
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

MobileMenuItems.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onCloseNavMenu: PropTypes.func.isRequired,
};

export default MobileMenuItems;
