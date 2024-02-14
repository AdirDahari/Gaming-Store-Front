import * as React from "react";
import { Slider, Typography, Box } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = () => {
  const [value, setValue] = React.useState([0, 999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "85%", m: "0 auto" }}>
      <Typography>price:</Typography>
      <Slider
        min={0}
        max={999}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};

export default RangeSlider;
