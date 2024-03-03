import { Fragment, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { MainAdminLink, MainLink } from "../myLink";
import { NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import MobileMenuItems from "./ui/MobileMenuItems";
import IconMenuItems from "./ui/IconMenuItems";
import ProfileMenuItems from "./ui/ProfileMenuItems";
import axios from "axios";
import MyToast from "../../messages/MyToast";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (!loggedIn) return;
        const { data } = await axios.get("users/my-user");
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [loggedIn]);

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
    setUserData(null);
    MyToast.info("You have logged out, see you soon");
    navigate(ROUTES.HOME);
  };

  const handleHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#282C35" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsEsportsIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            onClick={handleHomeClick}
            component="a"
            noWrap
            sx={{
              mr: 2,
              cursor: "pointer",
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
              <MobileMenuItems
                isAdmin={userData ? userData.isAdmin : false}
                loggedIn={loggedIn}
                onCloseNavMenu={handleCloseNavMenu}
              />
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
            {userData && userData.isAdmin ? (
              <Fragment>
                {MainAdminLink.map((myLink) => (
                  <NavLink
                    style={{ textDecoration: "none" }}
                    key={myLink.children + myLink.to}
                    to={myLink.to}
                  >
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "#f9f9f9", display: "block" }}
                    >
                      {myLink.children}
                    </MenuItem>
                  </NavLink>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                {MainLink.map((myLink) => (
                  <NavLink
                    style={{ textDecoration: "none" }}
                    key={myLink.children + myLink.to}
                    to={myLink.to}
                  >
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "#f9f9f9", display: "block" }}
                    >
                      {myLink.children}
                    </MenuItem>
                  </NavLink>
                ))}
              </Fragment>
            )}
          </Box>
          <IconMenuItems loggedIn={loggedIn} />
          {loggedIn && userData && (
            <Box sx={{ flexGrow: 0, ml: { md: 2 } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile image" src={userData.image.url} />
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
                <ProfileMenuItems
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
