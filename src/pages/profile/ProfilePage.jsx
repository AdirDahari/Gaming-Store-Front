import {
  Box,
  Button,
  Divider,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES.JS";
import {
  fromServerNormalization,
  toServerNormalization,
} from "./inputsNormalization";
import PostComponent from "../../components/PostComponent";
// import { errorToast, infoToast } from "../../messages/myToasts";

let userId = "";

const ProfilePage = () => {
  const [inputsValue, setInputsValue] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/users/my-user");
        userId = data._id;
        console.log(data);
        setInputsValue(fromServerNormalization(data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/posts/profile/my-posts");
        setPostsData(data);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  }, []);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleEditCardClick = (_id) => {
    navigate(`${ROUTES.EDITPOST}/${_id}`);
  };
  const handleBuyNowClick = (_id) => {
    navigate(`${ROUTES.POST}/${_id}`);
  };
  const handleCreatePostClick = () => {
    navigate(ROUTES.CREATEPOST);
  };

  const handleUpdateProfile = async (e) => {
    try {
      e.preventDefault();
      let request = toServerNormalization(inputsValue);
      console.log("request", request);
      if (userId) {
        const { data } = await axios.put(`/users/${userId}`, request);
        console.log("data", data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDeleteCardClick = async (_id, bizNumber) => {
  //   try {
  //     let request = {
  //       bizNumber: +bizNumber,
  //     };
  //     await axios.delete("/cards/" + _id, request);
  //     setMyCard((dataFromServerCopy) =>
  //       dataFromServerCopy.filter((card) => card._id !== _id)
  //     );
  //     //   infoToast("Card deleted");
  //   } catch (err) {
  //     //   errorToast("Something wrong....");
  //   }
  // };

  return (
    <Fragment>
      {inputsValue && (
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: 1200,
            m: "0 auto",
            p: 2,
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{ order: { xs: 1, sm: 1, md: 0 } }}
          >
            <Box sx={{ bgcolor: "#f9f9f9", p: 2, pb: 2, borderRadius: "5px" }}>
              <Box
                sx={{
                  width: "80%",
                  m: "0 auto",
                  p: 2,
                  bgcolor: "#A32CC4",
                  borderRadius: "5px",
                }}
              >
                <Typography color="#f9f9f9" variant="h5">
                  Edit Profile
                </Typography>
                <Typography color="#f9f9f9" sx={{ pl: 1 }}>
                  Complate your profile
                </Typography>
              </Box>
              <Box sx={{ pt: 4, pb: 4 }} component="form" noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      name="first"
                      required
                      fullWidth
                      id="first"
                      label="First Name"
                      value={inputsValue.first}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      name="middle"
                      fullWidth
                      id="middle"
                      label="Middle Name"
                      value={inputsValue.middle}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      required
                      name="last"
                      fullWidth
                      id="last"
                      label="Last Name"
                      value={inputsValue.last}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      required
                      name="phone"
                      fullWidth
                      id="phone"
                      label="Phone Name"
                      value={inputsValue.phone}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      name="url"
                      fullWidth
                      id="url"
                      label="Profile image (url)"
                      value={inputsValue.url}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      name="state"
                      fullWidth
                      id="state"
                      label="State"
                      value={inputsValue.state}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      required
                      name="country"
                      fullWidth
                      id="country"
                      label="Country"
                      value={inputsValue.country}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      required
                      name="city"
                      fullWidth
                      id="city"
                      label="City"
                      value={inputsValue.city}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      required
                      name="street"
                      fullWidth
                      id="street"
                      label="Street"
                      value={inputsValue.street}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      required
                      name="houseNumber"
                      fullWidth
                      id="houseNumber"
                      label="House number"
                      value={inputsValue.houseNumber}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="standard"
                      name="zip"
                      fullWidth
                      id="zip"
                      label="Zip"
                      value={inputsValue.zip}
                      onChange={handleInputsChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider variant="middle" sx={{ pt: 2 }} />
              <Box sx={{ pt: 4 }}>
                <Button variant="outlined" onClick={handleUpdateProfile}>
                  Update
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} sx={{ m: "0 auto" }}>
            <Box
              sx={{
                mt: 4,
                m: "0 auto",
                width: 200,
                overflow: "hidden",
                boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
                borderRadius: "50%",
              }}
            >
              <Box
                width="100%"
                sx={{
                  boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
                  borderRadius: "50%",
                }}
                component="img"
                src={inputsValue.url}
              />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center", p: 2 }}>
                {inputsValue.email}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
      <Box maxWidth={1200} m="0 auto" pt={4}>
        <Divider />
        <Typography pl={10} pt={4} variant="h5">
          My Posts
        </Typography>
        {postsData && (
          <Grid
            container
            spacing={2}
            maxWidth={1200}
            sx={{ m: 2, p: 2, pt: 2, margin: "0 auto" }}
          >
            <Divider sx={{ pt: 4 }} />
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
                  onEditClick={handleEditCardClick}
                  isUser={true}
                />
              </Grid>
            ))}
          </Grid>
        )}
        <Box pl={10} py={4}>
          <Button
            onClick={handleCreatePostClick}
            sx={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
            variant="outlined"
          >
            Create New post
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};
export default ProfilePage;
