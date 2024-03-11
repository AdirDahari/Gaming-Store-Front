import Grid from "@mui/material/Grid";
import { Box, Divider, Typography, Pagination } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SortComponent from "./ui/SortComponent";
import ROUTES from "../../routes/ROUTES.JS";
import { useSelector } from "react-redux";
import MyToast from "../../messages/MyToast";
import PostComponent from "../../components/PostComponent";
import nextId from "react-id-generator";
import { categories } from "../../layout/myLists";

let initData = [];

const ShopPage = () => {
  const [dataFromServer, setDataFromServer] = useState(null);
  const [filterDataToShow, setFilterDataToShow] = useState(null);
  const [filterInputs, setFilterInputs] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [userId, setUserId] = useState(null);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const [numberOfPages, setNumberOfPage] = useState(null);
  const [page, setPage] = useState(null);
  const [minPost, setMinPost] = useState(0);
  const [maxPost, setMaxPost] = useState(6);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data: postData } = await axios.get(
          `/posts/platform/${state.name}`.toLocaleLowerCase()
        );
        if (loggedIn == true) {
          setUserId(userData._id);
        }
        initData = postData;
        setDataFromServer(postData);
        findMaxPrice(postData);
        dataToShow(postData, 0, 6);
      } catch (err) {
        MyToast.error("Something wrong, Please try again later");
      }
    })();
  }, []);

  useEffect(() => {
    if (!initData.length) return;
    if (filterInputs || searchTxt.length > 1) {
      filterPostToShow();
    } else {
      setFilterDataToShow(null);
      dataToShow(initData, 0, 6);
      return;
    }
  }, [filterInputs, searchTxt]);

  const filterPostToShow = (min = 0, max = 6, page = 1) => {
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
    setFilterDataToShow(tempData);
    dataToShow(tempData, min, max, page);
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
      if (filterInputs || searchTxt) {
        filterPostToShow(minPost, maxPost, page);
        return;
      }
      dataToShow(data, minPost, maxPost, page);
      MyToast.info("Post Deleted!");
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
    }
  };
  const handleLikePost = async (_id) => {
    try {
      await axios.patch(`/posts/${_id}`);
      let { data } = await axios.get(
        `/posts/platform/${state.name}`.toLocaleLowerCase()
      );
      initData = data;
      if (filterInputs || searchTxt) {
        filterPostToShow(minPost, maxPost, page);
        return;
      }
      dataToShow(data, minPost, maxPost, page);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
    }
  };

  const dataToShow = (data, fromNum = 0, toNum = 6, page = 1) => {
    setMaxPost(toNum);
    setMinPost(fromNum);
    if (data.length > 6) {
      setNumberOfPage(Math.ceil(data.length / 6));
      setPage(page);
      let tempData = data.slice(fromNum, toNum);
      setDataFromServer(tempData);
    } else {
      setDataFromServer(data);
      setNumberOfPage(null);
      setPage(null);
    }
  };

  const handlePageChange = (e, value) => {
    let min = value * 6 - 6;
    let max = value * 6;
    if (max > initData.length) max = initData.length;
    if (filterInputs || searchTxt) {
      dataToShow(filterDataToShow, min, max);
    } else {
      dataToShow(initData, min, max);
    }

    setPage(value);
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
            categoriesData={["all", ...categories]}
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
        {numberOfPages && page && (
          <Box sx={{ display: "flex", justifyContent: "center" }} p={2}>
            <Pagination
              count={numberOfPages}
              variant="outlined"
              color="primary"
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default ShopPage;
