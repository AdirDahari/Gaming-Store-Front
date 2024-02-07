import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Fragment, useState } from "react";
import NumberInput from "./NumberInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    alt0: "",
    url1: "",
    alt1: "",
    url2: "",
    alt2: "",
  });
  const [price, setPrice] = useState(null);

  const handleNextClick = () => {
    handleNext(gameDetails);
  };

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Game Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Game name"
            fullWidth
            autoComplete="platform-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Platform"
            fullWidth
            autoComplete="game-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cate0"
            name="cate0"
            label="Category 1"
            fullWidth
            autoComplete="category-1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cate1"
            name="cate1"
            label="Category 2"
            fullWidth
            autoComplete="category-2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cate2"
            name="cate2"
            label="Category 3"
            fullWidth
            autoComplete="category-3"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="url0"
            name="url0"
            label="Image URL"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="url1"
            name="url1"
            label="Image URL"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="url2"
            name="url2"
            label="Image URL"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ p: 1 }}>Price:</Typography>
          <NumberInput
            aria-label="Demo number input"
            placeholder="Type a number…"
            value={price}
            onChange={(event, val) => setPrice(val)}
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

export default GameForm;
