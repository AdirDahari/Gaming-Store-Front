import {
  Card,
  Button,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import "../style/ImageScale.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const PostComponent = ({
  _id,
  name,
  price,
  image,
  alt,
  color,
  onBuyNowClick,
  onEditClick,
  isUser,
}) => {
  const handleBuyNowClick = () => {
    onBuyNowClick(_id);
  };
  const handleEditClick = () => {
    onEditClick(_id);
  };

  return (
    <Card
      sx={{
        border: `1px solid ${color}`,
        borderRadius: "15px",
        pl: 2,
        pr: 2,
        minHeight: 450,
        maxHeight: 450,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: isUser ? "space-between" : "end",
          }}
        >
          {isUser && (
            <Box>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={handleEditClick}>
                <EditIcon />
              </IconButton>
            </Box>
          )}
          <Box>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Box>

        <CardContent sx={{ maxHeight: 200, minHeight: 200 }}>
          <CardContent
            sx={{
              margin: "0 auto",
              maxHeight: 200,
              maxWidth: "100%",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <CardMedia
              onClick={handleBuyNowClick}
              className="imageSmallScale"
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
        <CardContent>
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
  onEditClick: PropTypes.func,
  isUser: PropTypes.bool,
};

PostComponent.defaultProps = {
  isUser: false,
};

export default PostComponent;
