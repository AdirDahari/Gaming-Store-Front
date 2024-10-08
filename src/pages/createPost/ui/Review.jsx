import Typography from "@mui/material/Typography";
import { Grid, Box, Button, CardMedia, Divider } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import nextId from "react-id-generator";

const Review = ({ handleBack, handleSubmit, userDetails, gameDetails }) => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    if (urls.length > 0) {
      return;
    }
    checkDoubles(gameDetails);
    if (gameDetails.url0) {
      setUrls((currentState) => {
        currentState = [gameDetails.url0, gameDetails.url1, gameDetails.url2];
        return currentState;
      });
    }
  }, []);

  const checkDoubles = (gameDetails) => {
    if (gameDetails.cate0 == gameDetails.cate1) {
      gameDetails.cate1 = "";
    }
    if (gameDetails.cate0 == gameDetails.cate2) {
      gameDetails.cate2 = "";
    }
    if (gameDetails.cate1 == gameDetails.cate2) {
      gameDetails.cate1 = "";
    }
  };

  const handleSubmitClick = () => {
    handleSubmit();
  };

  const handleBackClick = () => {
    handleBack();
  };

  return (
    <Fragment>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center", pb: 2 }}>
        User details
      </Typography>
      <Grid container spacing={2} sx={{ pb: 2 }}>
        <Grid item xs={12} sm={4}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              User name:{" "}
            </Typography>
            {userDetails.name.first}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              City:{" "}
            </Typography>
            {userDetails.address.city}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {userDetails.phone}
          </Typography>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5, p: 2 }}>
        Game details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Game:{" "}
            </Typography>
            {gameDetails.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Platform:{" "}
            </Typography>
            {gameDetails.platform}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Price:{" "}
            </Typography>
            {gameDetails.price}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              status:{" "}
            </Typography>
            {gameDetails.productStatus}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Categories:{" "}
            </Typography>
            {gameDetails.cate0 +
              " " +
              gameDetails.cate1 +
              " " +
              gameDetails.cate2}
          </Typography>
        </Grid>

        {urls.map((url) =>
          url ? (
            <Grid key={nextId()} item xs={12} sm={4}>
              <CardMedia
                component="img"
                image={url}
                alt={gameDetails.name + " image"}
              />
            </Grid>
          ) : (
            <Fragment key={nextId()}></Fragment>
          )
        )}
      </Grid>
      {gameDetails.description ? (
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Description:{" "}
            </Typography>
            {gameDetails.description}
          </Typography>
        </Grid>
      ) : (
        <></>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleBackClick} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmitClick}
          sx={{ mt: 3, ml: 1 }}
        >
          Create Post
        </Button>
      </Box>
    </Fragment>
  );
};

Review.propTypes = {
  handleBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired,
  gameDetails: PropTypes.object.isRequired,
};

export default Review;
