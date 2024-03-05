import { Fragment, useState } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";
import { validateGameDetails } from "../../../validation/gameDetails";

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
  const [platformValue, setPlatformValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [cate0Value, setCate0Value] = useState("");
  const [cate1Value, setCate1Value] = useState("");
  const [cate2Value, setCate2Value] = useState("");

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

  const handlePlatformChange = (e) => {
    setGameDetails((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
    setPlatformValue(e.target.value);
  };
  const handleStatusChange = (e) => {
    setGameDetails((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
    setStatusValue(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setGameDetails((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
    switch (e.target.name) {
      case "cate0":
        setCate0Value(e.target.value);
        break;
      case "cate1":
        setCate1Value(e.target.value);
        break;
      case "cate2":
        setCate2Value(e.target.value);
        break;
    }
  };

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Game Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Game name"
            fullWidth
            autoComplete="platform-name"
            variant="standard"
            onChange={handleInputsChange}
            error={errorsState && errorsState.name ? true : false}
            helperText={errorsState && errorsState.name ? errorsState.name : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="platform"
            select
            label="Platform"
            fullWidth
            defaultValue={platformValue ? platformValue : ""}
            value={platformValue}
            onChange={handlePlatformChange}
            error={errorsState && errorsState.platform ? true : false}
            helperText={
              errorsState && errorsState.platform
                ? errorsState.platform
                : "Please select your platform"
            }
          >
            {platforms.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="productStatus"
            select
            label="Product status"
            fullWidth
            defaultValue={statusValue ? statusValue : ""}
            value={statusValue}
            onChange={handleStatusChange}
            error={errorsState && errorsState.productStatus ? true : false}
            helperText={
              errorsState && errorsState.productStatus
                ? errorsState.productStatus
                : "Please select product status"
            }
          >
            {status.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            select
            name="cate0"
            label="Category 1"
            fullWidth
            defaultValue={cate0Value ? cate0Value : ""}
            value={cate0Value}
            onChange={handleCategoryChange}
            error={errorsState && errorsState.cate0 ? true : false}
            helperText={
              errorsState && errorsState.cate0 ? errorsState.cate0 : ""
            }
          >
            {categoryOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            name="cate1"
            label="Category 2"
            fullWidth
            defaultValue={cate1Value ? cate1Value : ""}
            value={cate1Value}
            onChange={handleCategoryChange}
          >
            {categoryOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            name="cate2"
            label="Category 3"
            fullWidth
            defaultValue={cate2Value ? cate2Value : ""}
            value={cate2Value}
            onChange={handleCategoryChange}
          >
            {categoryOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="url0"
            name="url0"
            label="Image URL"
            fullWidth
            variant="standard"
            onChange={handleInputsChange}
            error={errorsState && errorsState.url0 ? true : false}
            helperText={errorsState && errorsState.url0 ? errorsState.url0 : ""}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="url1"
            name="url1"
            label="Image URL"
            fullWidth
            variant="standard"
            onChange={handleInputsChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="url2"
            name="url2"
            label="Image URL"
            fullWidth
            variant="standard"
            onChange={handleInputsChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
          <TextField
            id="price"
            label="Price"
            type="number"
            onChange={handleInputsChange}
            error={errorsState && errorsState.price ? true : false}
            helperText={
              errorsState && errorsState.price ? errorsState.price : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="description"
            label="Description"
            multiline
            fullWidth
            rows={2}
            variant="standard"
            onChange={handleInputsChange}
          />
        </Grid>
      </Grid>
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
