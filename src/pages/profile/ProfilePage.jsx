import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES.JS";
import {
  fromServerUserNormalization,
  toServerUserNormalization,
} from "../../service/inputsNormalization";
import UpdateProfileForm from "./ui/UpdateProfileForm";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { validateUpdateProfile } from "../../validation/updateProfileValidation";
import MyToast from "../../messages/MyToast";
import PostComponent from "../../components/PostComponent";

let userId = "";
let profileImage = "";
let email = "";

const ProfilePage = () => {
  const [inputsValue, setInputsValue] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorsState, setErrorsState] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { data: userDara } = await axios.get("/users/my-user");
        userId = userDara._id;
        profileImage = userDara.image.url;
        email = userDara.email;
        setInputsValue(fromServerUserNormalization(userDara));

        let { data: postData } = await axios.get("/posts/profile/my-posts");
        setPostsData(postData);
      } catch (err) {
        MyToast.error("Something wrong, Please try again later");
        console.log(err);
      }
    })();
  }, []);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleEditPostClick = (_id) => {
    navigate(`${ROUTES.EDITPOST}/${_id}`);
  };
  const handleBuyNowClick = (_id) => {
    navigate(`${ROUTES.POST}/${_id}`);
  };
  const handleCreatePostClick = () => {
    navigate(ROUTES.CREATEPOST);
  };
  const handleDeletePostClick = async (_id) => {
    try {
      await axios.delete(`/posts/${_id}`);
      let { data } = await axios.get("/posts/profile/my-posts");
      setPostsData(data);
      MyToast.info("Post Deleted!");
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
      console.log(err);
    }
  };

  const handleUpdateProfile = async (e) => {
    try {
      e.preventDefault();

      const joiResponse = validateUpdateProfile(inputsValue);
      if (joiResponse) {
        setErrorsState(joiResponse);
        console.log(joiResponse);
        return;
      }
      let request = toServerUserNormalization(inputsValue);
      console.log("request", request);
      if (userId) {
        const { data } = await axios.put(`/users/${userId}`, request);
        console.log("data", data);
      }
      MyToast.info("Profile Updated!");
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
      console.log(err);
    }
  };
  const handleDeleteProfile = async () => {
    try {
      await axios.delete(`/users/${userId}`);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      } else if (sessionStorage.getItem("token")) {
        sessionStorage.removeItem("token");
      } else return;
      dispatch(authActions.logout());
      MyToast.info("Profile Deleted!");
      navigate(ROUTES.HOME);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
      console.log(err);
    }
  };
  const handleLikePost = async (_id) => {
    try {
      await axios.patch(`/posts/${_id}`);
      let { data } = await axios.get("/posts/profile/my-posts");
      setPostsData(data);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
      console.log(err);
    }
  };

  return (
    <Fragment>
      {inputsValue && (
        <UpdateProfileForm
          inputsValue={inputsValue}
          profileImage={profileImage}
          errorsState={errorsState}
          email={email}
          handleInputsChange={handleInputsChange}
          handleUpdateProfile={handleUpdateProfile}
          handleDeleteProfile={handleDeleteProfile}
        />
      )}
      <Box maxWidth={1200} m="0 auto" pt={4}>
        <Divider />
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography pl={10} pt={4} variant="h5">
              My Posts
            </Typography>
          </Box>
          <Box sx={{ pr: { xs: 0, sm: 10 }, pt: 4, pl: { xs: 6, sm: 0 } }}>
            <Button
              onClick={handleCreatePostClick}
              sx={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
              variant="outlined"
            >
              Create New post
            </Button>
          </Box>
        </Box>

        {postsData && postsData.length ? (
          <Grid
            container
            maxWidth={1200}
            sx={{ margin: "0 auto", p: 1, pb: 6, pt: 6 }}
          >
            {postsData.map((post) => (
              <Grid
                item
                key={post._id}
                xs={12}
                sm={6}
                md={4}
                p={3}
                maxWidth={1200}
              >
                <PostComponent
                  color="#A32CC4"
                  _id={post._id}
                  name={post.game.name}
                  price={post.game.price}
                  image={post.game.images[0].url}
                  alt={post.game.images[0].alt}
                  onBuyNowClick={handleBuyNowClick}
                  onEditClick={handleEditPostClick}
                  onDeleteClick={handleDeletePostClick}
                  onLikeClick={handleLikePost}
                  isLoggedIn={true}
                  isUser={true}
                  isLike={userId ? post.likes.includes(userId) : false}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Fragment>
            <Typography sx={{ p: 4 }} variant="h6">
              Your posts collection is empty
            </Typography>
          </Fragment>
        )}
      </Box>
    </Fragment>
  );
};
export default ProfilePage;
