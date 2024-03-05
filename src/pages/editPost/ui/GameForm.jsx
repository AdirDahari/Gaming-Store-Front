import { Fragment, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { validateGameDetails } from "../../../validation/gameDetails";
import PostInputsForm from "../../../components/PostInputsForm";

const platforms = ["xbox", "playstation", "pc", "nintendo"];
const status = ["new", "like new", "used"];
const categoryOptions = [
  "Action",
  "Adventure",
  "RPG",
  "Puzzle",
  "Racing",
  "Simulation",
  "Platform",
  "MMO",
  "Sport",
  "Shooter",
  "Strategy",
  "Fighting",
  "FPS",
  "Survival",
  "Other",
];

const GameForm = ({ handleNext, postData }) => {
  const [gameDetails, setGameDetails] = useState({
    platform: postData.platform,
    name: postData.game.name,
    description: postData.game.description ? postData.game.description : "",
    cate0: postData.game.category[0],
    cate1: postData.game.category[1] ? postData.game.category[1] : "",
    cate2: postData.game.category[2] ? postData.game.category[2] : "",
    productStatus: postData.game.productStatus,
    url0: postData.game.images[0].url,
    url1: postData.game.images[1] ? postData.game.images[1].url : "",
    url2: postData.game.images[2] ? postData.game.images[2].url : "",
    price: postData.game.price,
  });

  const [errorsState, setErrorsState] = useState(null);

  const handleNextClick = () => {
    const joiResponse = validateGameDetails(gameDetails);
    if (joiResponse) {
      setErrorsState(joiResponse);
      return;
    }

    handleNext(gameDetails);
  };

  const handleInputsChange = (e) => {
    setGameDetails((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSelectChange = (e) => {
    setGameDetails((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Game Details
      </Typography>

      <PostInputsForm
        gameDetails={gameDetails}
        categoryOptions={categoryOptions}
        handleInputsChange={handleInputsChange}
        handleOptionChange={handleSelectChange}
        platforms={platforms}
        status={status}
        errorsState={errorsState}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          onClick={handleNextClick}
          sx={{ mt: 3, ml: 1 }}
        >
          Next
        </Button>
      </Box>
    </Fragment>
  );
};

GameForm.propTypes = {
  handleNext: PropTypes.func.isRequired,
  postData: PropTypes.object.isRequired,
};

export default GameForm;
