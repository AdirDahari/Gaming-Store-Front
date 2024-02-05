import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const PostComponent = ({ title, phone, img, alt, description, category }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          sx={{ maxHeight: 240, minHeight: 240 }}
          component="img"
          image={img}
          alt={alt}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h5" noWrap sx={{ p: 0, mb: 1 }}>
          {title}
        </Typography>
        {category.map((cat, index) => (
          <Typography key={index} sx={{ p: 0, mb: 1 }} variant="body2">
            {cat}
          </Typography>
        ))}
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {description}
          </Typography>
          <Typography noWrap variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Address:{" "}
            </Typography>
            {phone}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            More details...
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

PostComponent.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostComponent;
