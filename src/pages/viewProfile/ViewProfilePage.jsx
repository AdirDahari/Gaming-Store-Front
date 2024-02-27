import { Fragment, useEffect, useState } from "react";
import { Box, Divider, Typography, Grid } from "@mui/material";
import PostComponent from "../../components/PostComponent";
import ViewProfileForm from "./ui/ViewProfileForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fromServerUserNormalization } from "../../service/inputsNormalization";

let profileImage = "";

const ViewProfilePage = () => {
  const [inputsValue, setInputsValue] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const { id: userId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data: userDataFromServer } = await axios.get(
          `/users/${userId}`
        );

        profileImage = userDataFromServer.image.url;

        setInputsValue(fromServerUserNormalization(userDataFromServer));
        const { data: postsDataFromServer } = await axios.get(`/posts`);

        let tempData = postsDataFromServer.filter(
          (post) => post.seller.userId == userId
        );
        setPostsData(tempData);
      } catch (err) {
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
  const handleUpdateProfile = () => {
    console.log("handleUpdateProfile");
  };
  const handleDeleteProfile = () => {
    console.log("handleDeleteProfile");
  };
  const handleBuyNowClick = () => {
    console.log("handleBuyNowClick");
  };
  const handleEditPostClick = () => {
    console.log("handleEditCardClick");
  };
  const handleDeletePostClick = () => {
    console.log("handleDeletePostClick");
  };

  return (
    <Fragment>
      {inputsValue && (
        <ViewProfileForm
          inputsValue={inputsValue}
          profileImage={profileImage}
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
              Profile posts
            </Typography>
          </Box>
        </Box>

        {postsData && postsData.length ? (
          <Grid
            container
            spacing={2}
            maxWidth={1200}
            sx={{ m: 2, p: 2, pt: 2, margin: "0 auto" }}
          >
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
                  onEditClick={handleEditPostClick}
                  onDeleteClick={handleDeletePostClick}
                  isUser={true}
                  isLoggedIn={true}
                  isLike={false}
                  isAdmin={true}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Fragment>
            <Typography pl={10} pt={4} variant="h6">
              No posts to show...
            </Typography>
          </Fragment>
        )}
      </Box>
    </Fragment>
  );
};

export default ViewProfilePage;
