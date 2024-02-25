import { Fragment, useEffect, useState } from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import PostComponent from "../../components/PostComponent";
import axios from "axios";

let initData = [];
let userId = "";

const FavouritesPage = () => {
  const [dataFromServer, setDataFromServer] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data: userData } = await axios.get("/users/my-user");
        const { data: postData } = await axios.get("/posts");
        userId = userData._id;
        initData = postData.filter((post) => post.likes.includes(userId));
        console.log(initData);
        setDataFromServer(initData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleBuyNowClick = (_id) => {
    console.log("handleBuyNowClick", _id);
  };
  const handleEditCardClick = (_id) => {
    console.log("handleEditCardClick", _id);
  };
  const handleDeletePostClick = (_id) => {
    console.log("handleDeletePostClick", _id);
  };
  const handleLikePost = (_id) => {
    console.log("handleLikePost", _id);
  };

  return (
    <Box maxWidth={1200} m="0 auto" sx={{ p: 1, pt: 4 }}>
      <Box maxWidth={1200} m="0 auto">
        <Typography fontWeight={500} variant="h3">
          FAVOURITES
        </Typography>
      </Box>
      {dataFromServer && (
        <Grid
          container
          spacing={0}
          maxWidth={1200}
          sx={{ m: 2, p: 2, margin: "0 auto" }}
        >
          <Divider sx={{ pt: 4 }} />
          {dataFromServer.map((post) => (
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
    </Box>
  );
};
export default FavouritesPage;
