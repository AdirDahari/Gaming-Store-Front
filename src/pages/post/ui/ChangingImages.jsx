import { Box, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ChangingImages = ({
  image,
  onChnageImageBackward,
  onChnageImageForward,
}) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <IconButton
        onClick={onChnageImageBackward}
        sx={{
          bgcolor: "rgba(239, 239, 240, 0.5)",
          position: "absolute",
          zIndex: 10,
          left: 0,
          top: "50%",
          transform: `translate(0, -50%)`,
          ml: 2,
        }}
      >
        <ArrowBackIosNewIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%)`,
          borderRadius: "15px",
          overflow: "hidden",
          maxWidthidth: "100%",
          maxHeight: "100%",
        }}
      >
        <Box component="img" width="100%" src={image.url} alt={image.alt} />
      </Box>

      <IconButton
        onClick={onChnageImageForward}
        sx={{
          bgcolor: "rgba(239, 239, 240, 0.5)",
          position: "absolute",
          zIndex: 10,
          right: 0,
          top: "50%",
          transform: `translate(0, -50%)`,
          mr: 2,
        }}
      >
        <ArrowForwardIosIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

ChangingImages.propTypes = {
  image: PropTypes.object.isRequired,
  onChnageImageBackward: PropTypes.func.isRequired,
  onChnageImageForward: PropTypes.func.isRequired,
};

export default ChangingImages;
