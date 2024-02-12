import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../../components/PostComponent";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `/posts/${state.name}`.toLocaleLowerCase()
        );
        setDataFromServer(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          backgroundImage: `url(${state.image})`,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          flexGrow: 1,
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "blue",
          mt: 2,
          flexGrow: 1,
        }}
      >
        <Typography textAlign="center" variant="h5" color="white">
          Sort items
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ m: 2, p: 2 }}>
        {dataFromServer.map((post) => (
          <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
            <PostComponent
              // category={post.game.category}
              // description={post.game.description}
              // title={post.game.name}
              // phone={post.seller.phone}
              // img={post.game.images[0].url}
              // alt={post.game.images[0].alt}
              color={state.color}
              post={post}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
export default ShopPage;
