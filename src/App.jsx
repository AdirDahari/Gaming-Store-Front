import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import useAutoLogin from "./hooks/useAutoLogin";

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
      <Router />
    </Layout>
  );
}

export default App;
