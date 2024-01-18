import { Fragment } from "react";
import { testMainLink } from "../../myLink";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import nextKey from "generate-my-key";

const MainLinks = () => {
  return (
    <Fragment>
      {testMainLink.map((myLink) => (
        <NavLink
          key={nextKey()}
          to={myLink.to}
          style={{ textDecoration: "none" }}
        >
          {({ isActive }) => (
            <Typography
              color={isActive ? "text.headerActive" : "text.headerColor"}
              sx={{ p: 2 }}
              variant={"h6"}
            >
              {myLink.children}
            </Typography>
          )}
        </NavLink>
      ))}
    </Fragment>
  );
};
export default MainLinks;
