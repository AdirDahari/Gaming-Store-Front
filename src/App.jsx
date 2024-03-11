import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import useAutoLogin from "./hooks/useAutoLogin";
import { ToastContainer } from "react-toastify";
import { LinearProgress, createTheme } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@emotion/react";
import MyToast from "./messages/MyToast";

function App() {
  const [doneAuth, setDoneAuth] = useState(false);
  const autoLogin = useAutoLogin();
  useEffect(() => {
    (async () => {
      try {
        await autoLogin();
      } catch (err) {
        MyToast.error("Something wrong, Please try again later");
      } finally {
        setDoneAuth(true);
      }
    })();
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Nunito",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        "Alata",
      ].join(","),
    },
  });

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        {doneAuth ? <Router /> : <LinearProgress />}
      </ThemeProvider>
    </Layout>
  );
}

export default App;
