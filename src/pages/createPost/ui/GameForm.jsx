import { Fragment, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { validateGameDetails } from "../../../validation/gameDetails";
import PostInputsForm from "../../../components/PostInputsForm";
import {
  categories as categoryOptions,
  platformNames as platforms,
  productStatus as status,
} from "../../../layout/myLists";

const GameForm = ({ handleNext }) => {
  const [gameDetails, setGameDetails] = useState({
    platform: "",
    name: "",
    description: "",
    cate0: "",
    cate1: "",
    cate2: "",
    productStatus: "",
    url0: "",
    url1: "",
    url2: "",
    price: 0,
  });
  const [errorsState, setErrorsState] = useState(null);

  const handleNextClick = () => {
    const joiResponse = validateGameDetails(gameDetails);
    if (joiResponse) {
      console.log(joiResponse);
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

  const handleOptionChange = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
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
        errorsState={errorsState}
        handleOptionChange={handleOptionChange}
        handleInputsChange={handleInputsChange}
        platforms={platforms}
        status={status}
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
};

export default GameForm;
