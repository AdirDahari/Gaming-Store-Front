import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { MainLink, ProfileMobileLink } from "../myLink";
import { NavLink } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import IconLinks from "./ui/IconLinks";
import IconProfileLink from "./ui/IconProfileLink";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    } else if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
    } else return;
    dispatch(authActions.logout());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsEsportsIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTES.HOME}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Gamming Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {loggedIn
                ? ProfileMobileLink.map((myLink) => (
                    <MenuItem
                      key={myLink.children + myLink.to}
                      onClick={handleCloseNavMenu}
                    >
                      <NavLink to={myLink.to}>
                        <Typography textAlign="center">
                          {myLink.children}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))
                : MainLink.map((myLink) => (
                    <MenuItem
                      key={myLink.children + myLink.to}
                      onClick={handleCloseNavMenu}
                    >
                      <NavLink to={myLink.to}>
                        <Typography textAlign="center">
                          {myLink.children}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
          <SportsEsportsIcon
            fontSize="large"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={ROUTES.HOME}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Gamming Store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {MainLink.map((myLink) => (
              <NavLink key={myLink.children + myLink.to} to={myLink.to}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {myLink.children}
                </Button>
              </NavLink>
            ))}
          </Box>
          <IconLinks loggedIn={loggedIn} />
          {loggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <IconProfileLink
                  loggedIn={loggedIn}
                  onCloseUserMenu={handleCloseUserMenu}
                  onLogout={handleLogout}
                />
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;