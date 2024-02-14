import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../../components/PostComponent";
import { useLocation } from "react-router-dom";
import SortComponent from "../../components/SortComponent1";

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
    <Box>
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
      <SortComponent />
      <Grid
        container
        spacing={2}
        item
        sx={{ m: 2, p: 2, margin: "0 auto" }}
        xs={12}
        sm={12}
        md={12}
        lg={10}
      >
        {dataFromServer.map((post) => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            <PostComponent color={state.color} post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ShopPage;
