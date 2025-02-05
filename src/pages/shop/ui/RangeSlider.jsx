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
    <Box
      sx={{
        width: "85%",
        m: "0 auto",
        "& .MuiSlider-thumb": {
          "&:hover, &.Mui-focusVisible": {
            boxShadow: "0 0 0 8px rgba(255,255,255,0.16)",
          },
        },
      }}
    >
      <Typography color="#f9f9f9">price:</Typography>
      {value && (
        <Slider
          min={range[0]}
          max={range[1]}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            color: "#f9f9f9",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-rail": {
              opacity: 0.5,
              backgroundColor: "rgba(255,255,255,0.5)",
            },
          }}
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
