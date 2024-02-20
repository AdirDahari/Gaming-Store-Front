import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../../components/PostComponent";
import { useLocation, useNavigate } from "react-router-dom";
import SortComponent from "./ui/SortComponent";
import ROUTES from "../../routes/ROUTES.JS";

let initData = [];

const ShopPage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [filterInputs, setFilterInputs] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `/posts/platform/${state.name}`.toLocaleLowerCase()
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
    if (!initData.length) return;
    if (filterInputs || searchTxt.length > 1) {
      filterPostToShow();
    } else {
      setDataFromServer(initData);
    }
  }, [filterInputs, initData, searchTxt]);

  const filterPostToShow = () => {
    let tempData = initData;
    if (filterInputs) {
      if (filterInputs.categories && filterInputs.categories !== "all") {
        tempData = tempData.filter((post) =>
          post.game.category.includes(filterInputs.categories)
        );
      }
      if (filterInputs.priceRange.length) {
        tempData = tempData.filter(
          (post) =>
            post.game.price >= filterInputs.priceRange[0] &&
            post.game.price <= filterInputs.priceRange[1]
        );
      }
      if (filterInputs.productStatus && filterInputs.productStatus !== "all") {
        tempData = tempData.filter(
          (post) => post.game.productStatus === filterInputs.productStatus
        );
      }
    }
    if (searchTxt) {
      if (searchTxt.length > 1) {
        tempData = tempData.filter((post) =>
          post.game.name.toLowerCase().startsWith(searchTxt.toLowerCase())
        );
      }
    }
    setDataFromServer(tempData);
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

  const handleBuyNowClick = (_id) => {
    navigate(`${ROUTES.POST}/${_id}`);
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
          priceRange={[0, maxPrice]}
          categoriesData={["all", ...allCategories]}
        />
      )}

      <Grid
        container
        spacing={2}
        maxWidth={1200}
        sx={{ m: 2, p: 2, margin: "0 auto" }}
      >
        {dataFromServer.map((post) => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            <PostComponent
              color={state.color}
              _id={post._id}
              name={post.game.name}
              price={post.game.price}
              image={post.game.images[0].url}
              alt={post.game.images[0].alt}
              onBuyNowClick={handleBuyNowClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ShopPage;
