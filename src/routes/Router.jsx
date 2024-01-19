import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES.JS";
import HomePage from "../pages/home/HomePage";
import ShopPage from "../pages/shop/ShopPage";
import Error404Page from "../pages/error/Error404Page";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SHOP} element={<ShopPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default Router;
