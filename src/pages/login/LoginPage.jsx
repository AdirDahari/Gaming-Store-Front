import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ROUTES from "../../routes/ROUTES.JS";
import { validateLogin } from "../../validation/loginValidation.js";
import { storeToken } from "../../service/storeService.js";
import { useNavigate } from "react-router-dom";
import useAutoLogin from "../../hooks/useAutoLogin.jsx";
import MyToast from "../../messages/MyToast.js";
import server from "../../server/server";

const isDemoMode = import.meta.env.VITE_SERVER_MODE == "demo";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorsState, setErrorsState] = useState(null);
  const navigate = useNavigate();
  const autoLogin = useAutoLogin();

  const handleEmailInputChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordInputChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const joiResponse = validateLogin({
        email: emailValue,
        password: passwordValue,
      });
      if (joiResponse) {
        setErrorsState(joiResponse);
        return;
      }
      const data = await server.users.postLoginUser({
        email: emailValue,
        password: passwordValue,
      });

      if (!data.jwt) {
        setErrorsState({
          invalid: "Email or Password Invalid",
        });
        MyToast.warning("Email or Password Invalid");
        return;
      }
      storeToken(data.jwt, rememberMe);
      await autoLogin();
      MyToast.success("You've logged in successfully");
      navigate(ROUTES.HOME);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
    }
  };

  const handleDemoSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = await server.users.postLoginUser({
        email: "test@gmail.com",
        password: "Abc123456!",
      });

      if (!data.jwt) {
        setErrorsState({
          invalid: "Email or Password Invalid",
        });
        MyToast.warning("Email or Password Invalid");
        return;
      }
      storeToken(data.jwt, rememberMe);
      await autoLogin();
      MyToast.success("You've logged in successfully");
      navigate(ROUTES.HOME);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
    }
  };

  return (
    <Box
      component="main"
      maxWidth="sm"
      sx={{ pb: 4, pt: 4, p: 4, m: "0 auto" }}
    >
      <CssBaseline />
      <Box
        sx={{
          m: "0 auto",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={emailValue}
            onChange={handleEmailInputChange}
            error={
              (errorsState && errorsState.email) ||
              (errorsState && errorsState.invalid)
                ? true
                : false
            }
            helperText={
              errorsState && errorsState.email ? errorsState.email : ""
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={handlePasswordInputChange}
            error={
              (errorsState && errorsState.password) ||
              (errorsState && errorsState.invalid)
                ? true
                : false
            }
            helperText={
              errorsState && errorsState.password ? errorsState.password : ""
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            disabled={isDemoMode}
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {isDemoMode && (
            <Box>
              <Typography textAlign="center">
                You are currently in view-only mode. To log in, click "Login as
                a guest" Any creations, changes, or deletions will not be saved
                in this mode. Enjoy!
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                onClick={handleDemoSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Login as a guest
              </Button>
            </Box>
          )}

          <Grid container>
            <Grid item>
              <Link href={ROUTES.REGISTER} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
