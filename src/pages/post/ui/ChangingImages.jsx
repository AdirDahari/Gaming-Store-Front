import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ChangingImages = ({ images }) => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box sx={{ position: "relative", width: "100%", height: "50vh" }}>
        <Box sx={{ position: "absolute", zIndex: 10, left: 0, height: "100%" }}>
          <ArrowBackIosNewIcon sx={{ color: "white" }} />
        </Box>
        <Box
          component="img"
          src={images[0].url}
          width="100%"
          sx={{ position: "absolute" }}
        />
        <Box
          sx={{ position: "absolute", zIndex: 10, right: 0, height: "100%" }}
        >
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>
      </Box>

      <Grid
        sx={{ width: "100%", height: 300 }}
        container
        spacing={2}
        display="flex"
        justifyContent="center"
      >
        {images.map((img) => (
          <Grid key={img.url} item xs={4}>
            <Box component="img" src={img.url} width="90%" sx={{ p: 2 }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

ChangingImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ChangingImages;
