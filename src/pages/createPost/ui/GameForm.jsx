import { Fragment, useState } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Grid,
  Alert,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";
import { validateGameDetails } from "../../../validation/gameDetails";

const platforms = ["xbox", "playstation", "pc", "nintendo"];
const status = ["new", "like new", "used"];

const GameForm = ({ handleNext }) => {
  const [gameDetails, setGameDetails] = useState({
    platform: "xbox",
    name: "",
    description: "",
    cate0: "",
    cate1: "",
    cate2: "",
    productStatus: "new",
    url0: "",
    url1: "",
    url2: "",
    price: 0,
  });
  const [errorsState, setErrorsState] = useState(null);
  const [platformValue, setPlatformValue] = useState("");
  const [statusValue, setStatusValue] = useState("");

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

  const handlePlatformChange = (e) => {
    setGameDetails((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
    setPlatformValue(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatusValue((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
    setStatusValue(e.target.value);
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
          />
          {errorsState && errorsState.name && (
            <Alert severity="warning">{errorsState.name}</Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="platform"
            select
            label="Platform"
            fullWidth
            helperText="Please select your platform"
            defaultValue={platformValue ? platformValue : ""}
            value={platformValue}
            onChange={handlePlatformChange}
          >
            {platforms.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {errorsState && errorsState.platform && (
            <Alert severity="warning">{errorsState.platform}</Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="productStatus"
            select
            label="Product status"
            fullWidth
            helperText="Please select product status"
            defaultValue={statusValue ? statusValue : ""}
            value={statusValue}
            onChange={handleStatusChange}
          >
            {status.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {errorsState && errorsState.productStatus && (
            <Alert severity="warning">{errorsState.productStatus}</Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="cate0"
            name="cate0"
            label="Category 1"
            fullWidth
            autoComplete="category-1"
            variant="standard"
            onChange={handleInputsChange}
          />
          {errorsState && errorsState.cate0 && (
            <Alert severity="warning">{errorsState.cate0}</Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="cate1"
            name="cate1"
            label="Category 2"
            fullWidth
            autoComplete="category-2"
            variant="standard"
            onChange={handleInputsChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="cate2"
            name="cate2"
            label="Category 3"
            fullWidth
            autoComplete="category-3"
            variant="standard"
            onChange={handleInputsChange}
          />
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
          />
          {errorsState && errorsState.url0 && (
            <Alert severity="warning">{errorsState.url0}</Alert>
          )}
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
          {errorsState && errorsState.url1 && (
            <Alert severity="warning">{errorsState.url1}</Alert>
          )}
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
          {errorsState && errorsState.url2 && (
            <Alert severity="warning">{errorsState.url2}</Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
          <TextField
            id="price"
            label="Price"
            type="number"
            onChange={handleInputsChange}
          />
          {errorsState && errorsState.price && (
            <Alert severity="warning">{errorsState.price}</Alert>
          )}
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
