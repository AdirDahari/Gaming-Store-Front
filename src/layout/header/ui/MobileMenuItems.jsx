import { Fragment } from "react";
import {
  GuestMobileLink,
  ProfileMobileLink,
  ProfileMobileAdminLink,
} from "../../myLink";
import { NavLink } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MobileMenuItems = ({ loggedIn, isAdmin, onCloseNavMenu }) => {
  const handleCloseNavMenu = () => {
    onCloseNavMenu();
  };
  return (
    <Fragment>
      {isAdmin ? (
        ProfileMobileAdminLink.map((myLink) => (
          <NavLink
            style={{ textDecoration: "none" }}
            key={myLink.children + myLink.to}
            to={myLink.to}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <myLink.icon sx={{ color: "#282C35" }} />
              <Typography sx={{ p: 1, color: "#282C35" }} textAlign="center">
                {myLink.children}
              </Typography>
            </MenuItem>
          </NavLink>
        ))
      ) : (
        <Fragment>
          {loggedIn
            ? ProfileMobileLink.map((myLink) => (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={myLink.children + myLink.to}
                  to={myLink.to}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <myLink.icon sx={{ color: "#282C35" }} />
                    <Typography
                      sx={{ p: 1, color: "#282C35" }}
                      textAlign="center"
                    >
                      {myLink.children}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))
            : GuestMobileLink.map((myLink) => (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={myLink.children + myLink.to}
                  to={myLink.to}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <myLink.icon sx={{ color: "#282C35" }} />
                    <Typography
                      sx={{ p: 1, color: "#282C35" }}
                      textAlign="center"
                    >
                      {myLink.children}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
        </Fragment>
      )}
    </Fragment>
  );
};

MobileMenuItems.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool,
  onCloseNavMenu: PropTypes.func.isRequired,
};

export default MobileMenuItems;
