import {
  Box,
  Card,
  Button,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const PostComponent = ({ title, phone, img, alt, description, category }) => {
  return (
    <Card>
      <Box>
        <CardMedia
          sx={{
            maxHeight: 240,
            maxWidth: 240,
            margin: "0 auto",
          }}
          component="img"
          image={img}
          alt={alt}
        />
      </Box>
      <CardContent>
        <Divider />
        <Typography variant="h5" noWrap sx={{ p: 0, mb: 1, mt: 1 }}>
          {title}
        </Typography>
        <Typography noWrap sx={{ p: 0, mb: 1, mt: 1 }}>
          Categories:
        </Typography>
        {category.map((cat, index) => (
          <Typography
            key={index}
            sx={{ p: 0, mb: 1, display: "inline" }}
            variant="body2"
          >
            {cat} {index !== category.length - 1 ? ", " : ""}
          </Typography>
        ))}

        <Box sx={{ mt: 1 }}>
          <Button size="small" variant="text">
            More details...
          </Button>

          {/* <Typography noWrap variant="body2">
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
          </Typography> */}
          {/* <Typography variant="subtitle1" color="primary">
            More details...
          </Typography> */}
        </Box>
        {/* <Box
          display="flex"
          justifyContent="space-between"
          sx={{ height: 100, width: "100%" }}
        >
          <CardMedia
            sx={{ height: "100%", width: "100%" }}
            component="img"
            image={img}
            alt={alt}
          />
          <CardMedia
            sx={{ height: "100%", width: "100%" }}
            component="img"
            image={img}
            alt={alt}
          />
          <CardMedia
            sx={{ height: "100%", width: "100%" }}
            component="img"
            image={img}
            alt={alt}
          />
        </Box> */}
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
