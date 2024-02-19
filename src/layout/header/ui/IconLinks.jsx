import PropTypes from "prop-types";
import { MenuItem, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { GuestLink, ProfileLink } from "../../myLink";
import { Fragment } from "react";

const IconLinks = ({ loggedIn }) => {
  return (
    <Fragment>
      {loggedIn ? (
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {ProfileLink.map((myLink) => (
            <NavLink key={myLink.children} to={myLink.to}>
              <MenuItem sx={{ display: { xs: "none", sm: "flex" } }}>
                <LoginIcon />
                <Typography>&nbsp; {myLink.children}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {GuestLink.map((myLink) => (
            <NavLink key={myLink.children} to={myLink.to}>
              <MenuItem sx={{ display: { xs: "none", sm: "flex" } }}>
                <LoginIcon />
                <Typography>&nbsp; {myLink.children}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Box>
      )}
    </Fragment>
  );
};

IconLinks.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default IconLinks;
