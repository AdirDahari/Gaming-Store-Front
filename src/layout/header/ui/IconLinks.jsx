import PropTypes from "prop-types";
import { MenuItem, Typography, Menu } from "@mui/material";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { ProfileIconLink, GuestLink, ProfileLink } from "../../myLink";
import { Fragment } from "react";

const IconLinks = (loggedIn) => {
  return (
    <Fragment>
      {ProfileLink.map((myLink) => (
        <NavLink key={myLink.children} to={myLink.to}>
          <MenuItem sx={{ display: { xs: "none", sm: "flex" } }}>
            <LoginIcon />
            <Typography>&nbsp; {myLink.children}</Typography>
          </MenuItem>
        </NavLink>
      ))}
    </Fragment>
  );
};

IconLinks.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default IconLinks;
