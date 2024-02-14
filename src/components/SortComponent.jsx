import {
  TextField,
  Grid,
  MenuItem,
  Slider,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";

const categories = ["all", "xbox", "playstation", "pc"];

const priceText = (value) => {
  return `${value}`;
};

const SortComponent = () => {
  const [priceRange, setPriceRange] = useState([0, 999]);

  const handlePriceChange = (e, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Grid
      container
      sx={{ m: 2, p: 2, margin: "0 auto" }}
      item
      xs={12}
      sm={12}
      md={12}
      lg={6}
    >
      <Grid item xs={3}>
        <TextField
          name="category"
          select
          label="Category"
          defaultValue="all"
          fullWidth
        >
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={3}>
        <TextField label="Category" fullWidth name="category" />
      </Grid>
      <Grid item xs={3}>
        <TextField label="Category" fullWidth name="category" />
      </Grid>
      <Grid item xs={3}>
        <Typography sx={{ textAlign: "center", ml: 1 }}>Price:</Typography>
        <Box sx={{ width: "80%", ml: 4 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            getAriaValueText={priceText}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
// export default SortComponent;
