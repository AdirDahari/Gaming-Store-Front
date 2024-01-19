import {
  BrowserRouter as Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ROUTES from "./ROUTES.JS";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path={ROUTES.HOME} />)
);

export default router;
