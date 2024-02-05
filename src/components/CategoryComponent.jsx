import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

const CategoryComponent = ({ category, image, alt }) => {
  const handleCateClick = () => {};

  return (
    <Card sx={{ maxWidth: 305, maxHeight: 305, borderRadius: "50%" }}>
      <CardActionArea onClick={handleCateClick}>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          width={305}
          height={305}
        />
      </CardActionArea>
    </Card>
  );
};

CategoryComponent.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CategoryComponent;
