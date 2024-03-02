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
    <Box sx={{ maxWidth: 305, maxHeight: 305, m: "0 auto" }}>
      <Box
        className="imageSmallScale"
        sx={{ display: "block", m: "0 auto", cursor: "pointer" }}
        onClick={handleClick}
        component="img"
        src={children.image}
        alt={children.alt}
        height={305}
        maxWidth="100%"
      />
    </Box>
  );
};

CategoryComponent.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CategoryComponent;
