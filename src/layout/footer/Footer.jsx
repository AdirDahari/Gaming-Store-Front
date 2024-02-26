import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Popover,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterLinks from "./ui/FooterLinks";
import ROUTES from "../../routes/ROUTES.JS";

const email = "Adir10500@gmail.com";

const Footer = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };
  const handleHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#ededed7",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            alignItems="center"
            maxWidth={800}
            m="0 auto"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={6}>
              <Typography textAlign="center" variant="h3" fontWeight={300}>
                Contact us
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ m: "0 auto", width: 210 }}>
                <IconButton
                  href="https://www.linkedin.com/in/adir-dahari/"
                  sx={{ p: 1, m: 1 }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://github.com/AdirDahari"
                  sx={{ p: 1, m: 1 }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={handleClick} sx={{ p: 1, m: 1 }}>
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Box>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography p={2}>{email}</Typography>
                  <Tooltip title="Copy" placement="top">
                    <IconButton onClick={handleCopyEmail}>
                      <LinkIcon fontSize="small" sx={{ p: 1 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Popover>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#111111",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={handleHomeClick}
                color="#E1E1E1"
                variant="h5"
              >
                Gamming Store
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FooterLinks />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Footer;
