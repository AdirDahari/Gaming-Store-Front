import {
  Card,
  Button,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import PropTypes from "prop-types";
import "../style/PostComponent.css";

const PostComponent = ({
  _id,
  name,
  price,
  image,
  alt,
  color,
  onBuyNowClick,
}) => {
  const handleBuyNowClick = () => {
    onBuyNowClick(_id);
  };

  return (
    <Card
      sx={{
        border: `1px solid ${color}`,
        borderRadius: "15px",
        p: 1,
        minHeight: 450,
        maxHeight: 450,
      }}
    >
      <CardContent>
        <CardContent sx={{ maxHeight: 250, minHeight: 250 }}>
          <CardContent
            sx={{
              margin: "0 auto",
              maxHeight: 250,
              maxWidth: "100%",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <CardMedia
              onClick={handleBuyNowClick}
              className="image"
              component="img"
              sx={{
                cursor: "pointer",
                width: "100%",
                borderRadius: "10px",
                m: "0 auto",
              }}
              image={image}
              alt={alt}
            />
          </CardContent>
        </CardContent>
        <CardContent sx={{ minHeight: 50, maxHeight: 50 }}>
          <Typography
            variant="h5"
            noWrap
            sx={{ textAlign: "center", fontWeight: "500" }}
          >
            {name}
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            minHeight: 50,
            maxHeight: 50,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <CardActions>
            <Button
              sx={{ minWidth: 110 }}
              onClick={handleBuyNowClick}
              variant="contained"
            >
              Buy now
            </Button>
          </CardActions>
          <Typography sx={{ fontWeight: "600", p: 1 }} variant="h5">
            &#8362; {price}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

PostComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onBuyNowClick: PropTypes.func.isRequired,
};

export default PostComponent;
