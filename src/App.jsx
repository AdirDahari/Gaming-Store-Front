import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import useAutoLogin from "./hooks/useAutoLogin";
import { ToastContainer } from "react-toastify";
import { LinearProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [doneAuth, setDoneAuth] = useState(false);
  const autoLogin = useAutoLogin();
  useEffect(() => {
    (async () => {
      try {
        await autoLogin();
      } catch (err) {
        console.log(err);
      } finally {
        setDoneAuth(true);
      }
    })();
  }, []);

  return (
    <Layout>
      <ToastContainer />
      {doneAuth ? <Router /> : <LinearProgress />}
    </Layout>
  );
}

export default App;
