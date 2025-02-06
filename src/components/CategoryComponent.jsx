import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES.JS";
import "../style/ImageScale.css";

const CategoryComponent = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.SHOP, { state: children });
  };

  return (
    <Box
      sx={{
        maxWidth: 305,
        maxHeight: 305,
        m: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className="imageSmallScale"
        sx={{
          display: "block",
          m: "0 auto",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.05)" },
          "&:active": { transform: "scale(0.95)" }, // Touch effect
        }}
        onClick={handleClick}
        component="img"
        src={children.image}
        alt={children.alt}
        height={305}
        maxWidth="100%"
        loading="lazy"
      />
    </Box>
  );
};

CategoryComponent.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CategoryComponent;
