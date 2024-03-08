import PropTypes from "prop-types";
import { MenuItem, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { GuestLink, ProfileLink } from "../../myLink";
import { Fragment } from "react";
import nextId from "react-id-generator";

const IconMenuItems = ({ loggedIn }) => {
  return (
    <Fragment>
      {loggedIn ? (
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {ProfileLink.map((myLink) => (
            <NavLink
              style={{ textDecoration: "none" }}
              key={nextId()}
              to={myLink.to}
            >
              <MenuItem
                sx={{
                  "&:hover": { backgroundColor: "rgb(246, 245, 245, 0.1)" },
                }}
              >
                <myLink.icon sx={{ color: "#f9f9f9" }} />
                <Typography sx={{ color: "#f9f9f9" }}>
                  &nbsp; {myLink.children}
                </Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {GuestLink.map((myLink) => (
            <NavLink
              style={{ textDecoration: "none" }}
              key={nextId()}
              to={myLink.to}
            >
              <MenuItem
                sx={{
                  "&:hover": { backgroundColor: "rgb(246, 245, 245, 0.1)" },
                }}
              >
                <myLink.icon sx={{ color: "#f9f9f9" }} />
                <Typography sx={{ color: "#f9f9f9" }}>
                  &nbsp; {myLink.children}
                </Typography>
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
