import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES.JS";

const CategoryComponent = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.SHOP, { state: children });
  };
  return (
    <Card sx={{ maxWidth: 305, maxHeight: 305, borderRadius: "50%" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={children.image}
          alt={children.alt}
          width={305}
          height={305}
        />
      </CardActionArea>
    </Card>
  );
};

CategoryComponent.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CategoryComponent;
