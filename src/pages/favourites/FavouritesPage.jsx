import { useEffect, useState } from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import PostComponent from "../../components/PostComponent";
import axios from "axios";
import { Search } from "../shop/ui/Search";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES.JS";

let initData = [];
let userId = "";

const FavouritesPage = () => {
  const [dataFromServer, setDataFromServer] = useState(null);
  const [txt, setTxt] = useState("");
  const navigate = useNavigate();

  const handleTxtChange = (e) => {
    setTxt(e.target.value);
  };

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

  useEffect(() => {
    if (!initData.length) return;
    if (txt.length > 1) {
      let tempData = initData;
      setDataFromServer(
        tempData.filter((post) =>
          post.game.name.toLowerCase().startsWith(txt.toLowerCase())
        )
      );
    } else {
      setDataFromServer(initData);
    }
  }, [txt]);

  const handleBuyNowClick = (_id) => {
    navigate(`${ROUTES.POST}/${_id}`);
  };
  const handleEditCardClick = (_id) => {
    navigate(`${ROUTES.EDITPOST}/${_id}`);
  };
  const handleDeletePostClick = async (_id) => {
    try {
      await axios.delete(`/posts/${_id}`);
      const { data: postData } = await axios.get("/posts");
      initData = postData.filter((post) => post.likes.includes(userId));
      setDataFromServer(initData);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLikePost = async (_id) => {
    try {
      await axios.patch(`/posts/${_id}`);
      const { data: postData } = await axios.get("/posts");
      initData = postData.filter((post) => post.likes.includes(userId));
      setDataFromServer(initData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box maxWidth={1200} m="0 auto" sx={{ p: 1, pt: 4 }}>
      <Box
        sx={{
          minHeight: 650,
          bgcolor: "#f9f9f9",
          p: 4,
          pb: 2,
          mb: 4,
          borderRadius: "5px",
          boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
        }}
      >
        <Box
          sx={{
            width: "80%",
            m: "0 auto",
            p: 2,
            bgcolor: "#FB607F",
            borderRadius: "5px",
          }}
        >
          <Typography color="#f9f9f9" variant="h5">
            FAVOURITES
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="#f9f9f9" sx={{ pl: 1 }}>
              find your saved posts
            </Typography>
            <Search txt={txt} onTxtChange={handleTxtChange} />
          </Box>
        </Box>

        {dataFromServer && (
          <Grid
            container
            spacing={0}
            maxWidth={1200}
            sx={{ m: 2, p: 2, pt: 4, margin: "0 auto" }}
          >
            <Divider sx={{ pt: 4 }} />
            {dataFromServer.map((post) => (
              <Grid item key={post._id} xs={12} sm={6} md={4} sx={{ p: 1 }}>
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
                  isUser={userId ? post.seller.userId == userId : false}
                  isLoggedIn={true}
                  isLike={true}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};
export default FavouritesPage;
