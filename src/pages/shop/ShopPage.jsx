import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../../components/PostComponent";
import { useLocation } from "react-router-dom";
import SortComponent from "../../components/SortComponent";

let initData = [];

const ShopPage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [filterInputs, setFilterInputs] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
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
        initData = data;
        findMaxPrice(data);
        findAllCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("filterInputs", filterInputs);
    if (!initData.length) return;
    if (filterInputs) {
      managePostToShow();
    } else {
      setDataFromServer(initData);
    }
    if (searchTxt.length >= 2) {
      searchPosts();
    }
  }, [filterInputs, initData, searchTxt]);

  const searchPosts = () => {
    setDataFromServer(
      dataFromServer.filter((post) => post.game.name.startsWith(searchTxt))
    );
  };

  const managePostToShow = () => {
    let tempData = initData;
    if (filterInputs.categories && filterInputs.categories !== "all") {
      tempData = tempData.filter((post) =>
        post.game.category.includes(filterInputs.categories)
      );
      setDataFromServer(tempData);
    }
    if (filterInputs.priceRange.length) {
      tempData = tempData.filter(
        (post) =>
          post.game.price >= filterInputs.priceRange[0] &&
          post.game.price <= filterInputs.priceRange[1]
      );
      setDataFromServer(tempData);
    }
    if (filterInputs.productStatus && filterInputs.productStatus !== "all") {
      tempData = tempData.filter(
        (post) => post.game.productStatus === filterInputs.productStatus
      );
      setDataFromServer(tempData);
    }
  };

  const findMaxPrice = (data) => {
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].game.price > max) {
        max = data[i].game.price;
      }
    }
    setMaxPrice(max + 50);
  };

  const findAllCategories = (data) => {
    let categories = [];
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

  const handleSearchTxt = (txt) => {
    setSearchTxt(txt);
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
          onSearchChange={handleSearchTxt}
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
