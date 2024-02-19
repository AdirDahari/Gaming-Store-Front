import PropTypes from "prop-types";
import { MenuItem, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { GuestLink, ProfileLink } from "../../myLink";
import { Fragment } from "react";

const IconMenuItems = ({ loggedIn }) => {
  return (
    <Fragment>
      {loggedIn ? (
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {ProfileLink.map((myLink) => (
            <NavLink key={myLink.children} to={myLink.to}>
              <MenuItem>
                <myLink.icon />
                <Typography>&nbsp; {myLink.children}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {GuestLink.map((myLink) => (
            <NavLink key={myLink.children} to={myLink.to}>
              <MenuItem>
                <myLink.icon />
                <Typography>&nbsp; {myLink.children}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Box>
      )}
    </Fragment>
  );
};

IconMenuItems.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default IconMenuItems;