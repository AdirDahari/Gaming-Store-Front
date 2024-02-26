import { GuestMobileLink, ProfileMobileLink } from "../../myLink";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import nextKey from "generate-my-key";
import { useSelector } from "react-redux";

const FooterLinks = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);

  return (
    <Box display="flex" mt={2}>
      {loggedIn
        ? ProfileMobileLink.map((myLink) => (
            <NavLink
              style={{ textDecoration: "none" }}
              key={nextKey()}
              to={myLink.to}
            >
              <MenuItem
                sx={[
                  {
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  },
                ]}
              >
                <Typography color="#E1E1E1">{myLink.children}</Typography>
              </MenuItem>
            </NavLink>
          ))
        : GuestMobileLink.map((myLink) => (
            <NavLink
              style={{ textDecoration: "none" }}
              key={nextKey()}
              to={myLink.to}
            >
              <MenuItem
                sx={[
                  {
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  },
                ]}
              >
                <Typography color="#E1E1E1">{myLink.children}</Typography>
              </MenuItem>
            </NavLink>
          ))}
    </Box>
  );
};
export default FooterLinks;
