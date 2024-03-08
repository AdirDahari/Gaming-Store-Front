import Grid from "@mui/material/Grid";
import { Box, Divider, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SortComponent from "./ui/SortComponent";
import ROUTES from "../../routes/ROUTES.JS";
import { useSelector } from "react-redux";
import MyToast from "../../messages/MyToast";
import PostComponent from "../../components/PostComponent";
import nextId from "react-id-generator";

let initData = [];

const ShopPage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [filterInputs, setFilterInputs] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [userId, setUserId] = useState(null);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        console.log("state", state);
        const { data: postData } = await axios.get(
          `/posts/platform/${state.name}`.toLocaleLowerCase()
        );
        if (loggedIn == true) {
          setUserId(userData._id);
        }

        console.log(postData);
        initData = postData;
        findMaxPrice(postData);
        findAllCategories(postData);
      } catch (err) {
        MyToast.error("Something wrong, Please try again later");
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
  const handleEditPostClick = (_id) => {
    navigate(`${ROUTES.EDITPOST}/${_id}`);
  };
  const handleDeletePostClick = async (_id) => {
    try {
      await axios.delete(`/posts/${_id}`);
      let { data } = await axios.get(
        `/posts/platform/${state.name}`.toLocaleLowerCase()
      );
      initData = data;
      setDataFromServer(initData);
      MyToast.info("Post Deleted!");
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
      console.log(err);
    }
  };
  const handleLikePost = async (_id) => {
    try {
      await axios.patch(`/posts/${_id}`);
      let { data } = await axios.get(
        `/posts/platform/${state.name}`.toLocaleLowerCase()
      );
      initData = data;
      setDataFromServer(initData);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
      console.log(err);
    }
  };

  return (
    <Box maxWidth={1200} m="0 auto" sx={{ p: 1, pt: 4 }}>
      <Box
        sx={{
          minHeight: 650,
          bgcolor: "#f9f9f9",
          pt: 4,
          pb: 4,
          mb: 4,
          p: { xs: 0, sm: 4 },
          borderRadius: "5px",
          boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
        }}
      >
        <Box
          sx={{
            width: "80%",
            m: "0 auto",
            p: 1,
            bgcolor: state.color,
            borderRadius: "5px",
          }}
        >
          <SortComponent
            platform={state.name}
            onInputsChange={filterData}
            onSearchChange={handleSearchTxt}
            priceRange={maxPrice ? [0, maxPrice] : [0, 10]}
            categoriesData={allCategories ? ["all", ...allCategories] : ["all"]}
          />
        </Box>
        <Divider variant="middle" sx={{ pt: 4, pb: 4 }} />
        {dataFromServer && dataFromServer.length > 0 ? (
          <Grid
            container
            maxWidth={1200}
            sx={{ margin: "0 auto", p: 1, pb: 4, pt: 4 }}
          >
            {dataFromServer.map((post) => (
              <Grid item key={nextId()} xs={12} sm={6} md={4} sx={{ p: 3 }}>
                <PostComponent
                  color={state.color}
                  _id={post._id}
                  name={post.game.name}
                  price={post.game.price}
                  image={post.game.images[0].url}
                  alt={post.game.images[0].alt}
                  onBuyNowClick={handleBuyNowClick}
                  onEditClick={handleEditPostClick}
                  onDeleteClick={handleDeletePostClick}
                  onLikeClick={handleLikePost}
                  isLoggedIn={loggedIn}
                  isUser={userId ? post.seller.userId == userId : false}
                  isLike={userId ? post.likes.includes(userId) : false}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Fragment>
            <Typography sx={{ p: 4, pl: { xs: 0, sm: 2, md: 8 } }} variant="h6">
              No posts found
            </Typography>
          </Fragment>
        )}
      </Box>
    </Box>
  );
};
export default ShopPage;
