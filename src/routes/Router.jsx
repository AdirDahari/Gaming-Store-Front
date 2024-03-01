import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES.JS";
import HomePage from "../pages/home/HomePage";
import ShopPage from "../pages/shop/ShopPage";
import Error404Page from "../pages/error/Error404Page";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import CreatePostPage from "../pages/createPost/CreatePostPage";
import PostPage from "../pages/post/PostPage";
import EditPostPage from "../pages/editPost/EditPostPage";
import ProfilePage from "../pages/profile/ProfilePage";
import FavouritesPage from "../pages/favourites/FavouritesPage";
import ManagementPage from "../pages/management/ManagementPage";
import AboutPage from "../pages/about/AboutPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SHOP} element={<ShopPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CREATEPOST} element={<CreatePostPage />} />
      <Route path={`${ROUTES.EDITPOST}/:id`} element={<EditPostPage />} />
      <Route path={`${ROUTES.POST}/:id`} element={<PostPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.FAVOURITES} element={<FavouritesPage />} />
      <Route path={ROUTES.MANAGMENT} element={<ManagementPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />

      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default Router;
