import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES.JS";
import {
  fromServerNormalization,
  toServerNormalization,
} from "./inputsNormalization";
import PostComponent from "../../components/PostComponent";
import UpdateUserForm from "./ui/UpdateUserForm";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

let userId = "";
let profileImage = "";

const ProfilePage = () => {
  const [inputsValue, setInputsValue] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/users/my-user");
        userId = data._id;
        profileImage = data.image.url;
        // console.log(data);
        setInputsValue(fromServerNormalization(data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/posts/profile/my-posts");
        console.log("my posts", data);
        setPostsData(data);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  }, []);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleEditCardClick = (_id) => {
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateProfile = async (e) => {
    try {
      e.preventDefault();
      let request = toServerNormalization(inputsValue);
      console.log("request", request);
      if (userId) {
        const { data } = await axios.put(`/users/${userId}`, request);
        console.log("data", data);
      }
    } catch (err) {
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
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLikePost = async (_id) => {
    try {
      await axios.patch(`/posts/${_id}`);
      let { data } = await axios.get("/posts/profile/my-posts");
      setPostsData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      {inputsValue && (
        <UpdateUserForm
          inputsValue={inputsValue}
          profileImage={profileImage}
          handleInputsChange={handleInputsChange}
          handleUpdateProfile={handleUpdateProfile}
          handleDeleteProfile={handleDeleteProfile}
        />
      )}
      <Box maxWidth={1200} m="0 auto" pt={4}>
        <Divider />
        <Typography pl={10} pt={4} variant="h5">
          My Posts
        </Typography>
        {postsData && (
          <Grid
            container
            spacing={2}
            maxWidth={1200}
            sx={{ m: 2, p: 2, pt: 2, margin: "0 auto" }}
          >
            <Divider sx={{ pt: 4 }} />
            {postsData.map((post) => (
              <Grid item key={post._id} xs={12} sm={6} md={4}>
                <PostComponent
                  color="#A32CC4"
                  _id={post._id}
                  name={post.game.name}
                  price={post.game.price}
                  image={post.game.images[0].url}
                  alt={post.game.images[0].alt}
                  onBuyNowClick={handleBuyNowClick}
                  onEditClick={handleEditCardClick}
                  onDeleteClick={handleDeletePostClick}
                  onLikeClick={handleLikePost}
                  isUser={true}
                  isLoggedIn={true}
                  isLike={userId ? post.likes.includes(userId) : false}
                />
              </Grid>
            ))}
          </Grid>
        )}
        <Box pl={10} py={4}>
          <Button
            onClick={handleCreatePostClick}
            sx={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
            variant="outlined"
          >
            Create New post
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};
export default ProfilePage;
