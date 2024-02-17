import { Slider, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = ({ range, onRangeChange }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    setValue(range);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onRangeChange(newValue);
  };

  return (
    <Box sx={{ width: "85%", m: "0 auto" }}>
      <Typography>price:</Typography>
      {value && (
        <Slider
          min={range[0]}
          max={range[1]}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      )}
    </Box>
  );
};

RangeSlider.propTypes = {
  range: PropTypes.array.isRequired,
  onRangeChange: PropTypes.func.isRequired,
};

export default RangeSlider;
