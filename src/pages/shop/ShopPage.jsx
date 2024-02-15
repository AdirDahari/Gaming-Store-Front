import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../../components/PostComponent";
import { useLocation } from "react-router-dom";
import SortComponent from "../../components/SortComponent";

const ShopPage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [filterInputs, setFilterInputs] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `/posts/${state.name}`.toLocaleLowerCase()
        );
        console.log(data);
        setDataFromServer(data);
        findMaxPrice(data);
        findAllCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const findMaxPrice = (data) => {
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].game.price > max) {
        max = data[i].game.price;
      }
    }
    setMaxPrice(max);
  };

  const findAllCategories = (data) => {
    let categories = [];
    console.log("filter", data);
    for (let i = 0; i < data.length; i++) {
      let tempArr = data[i].game.category;
      for (let j = 0; j < tempArr.length; j++) {
        if (!categories.includes(tempArr[j])) {
          categories.push(tempArr[j]);
        }
      }
    }
    setAllCategories(categories);
  };

  const filterData = (inputs) => {
    setFilterInputs(inputs);
  };

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
      {maxPrice && allCategories && (
        <SortComponent
          onInputsChange={filterData}
          maxPrice={maxPrice}
          categoriesData={allCategories}
        />
      )}

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
