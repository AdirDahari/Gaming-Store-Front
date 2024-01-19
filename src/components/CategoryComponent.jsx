import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

const CategoryComponent = ({ category, image, alt }) => {
  return (
    <Card sx={{ maxWidth: 305, maxHeight: 305, borderRadius: "50%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          width={305}
          height={305}
        />
        {/* <CardContent>
          <Typography
            textAlign="center"
            gutterBottom
            variant="h5"
            component="div"
          >
            {category}
          </Typography>
        </CardContent> */}
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
