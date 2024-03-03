import {
  Card,
  Button,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
  Popover,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import "../style/ImageScale.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Fragment, useState } from "react";

const PostComponent = ({
  _id,
  name,
  price,
  image,
  alt,
  color,
  onBuyNowClick,
  onEditClick,
  onDeleteClick,
  onLikeClick,
  isUser,
  isLoggedIn,
  isLike,
  isAdmin,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleBuyNowClick = () => {
    onBuyNowClick(_id);
  };

  const handleEditClick = () => {
    onEditClick(_id);
  };

  const handleDeleteClick = () => {
    onDeleteClick(_id);
  };

  const handleLikeClick = () => {
    onLikeClick(_id);
  };

  return (
    <Card
      sx={{
        border: `1px solid ${color}`,
        borderRadius: "5px",
        pl: 2,
        pr: 2,
        minHeight: 450,
        maxHeight: 450,
      }}
    >
      <CardContent>
        {isLoggedIn ? (
          <Box
            sx={{
              display: "flex",
              height: 40,
              justifyContent: isUser ? "space-between" : "end",
            }}
          >
            {isUser && (
              <Fragment>
                <Box>
                  <IconButton onClick={handleClick}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={handleEditClick}>
                    <EditIcon />
                  </IconButton>
                </Box>
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                >
                  <Button
                    onClick={handleDeleteClick}
                    color="error"
                    sx={{ p: 2 }}
                  >
                    Delete Post
                  </Button>
                </Popover>
              </Fragment>
            )}
            {isAdmin == false && (
              <Box>
                <IconButton onClick={handleLikeClick}>
                  <FavoriteIcon sx={{ color: isLike && "red" }} />
                </IconButton>
              </Box>
            )}
          </Box>
        ) : (
          <Box sx={{ height: 40 }}></Box>
        )}

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
                objectFit: "contain",
                cursor: "pointer",
                width: "100%",
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
              sx={{
                minWidth: 110,
                bgcolor: "#282C35",
                ":hover": { bgcolor: color },
              }}
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
  onDeleteClick: PropTypes.func,
  onLikeClick: PropTypes.func,
  isUser: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  isLike: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

PostComponent.defaultProps = {
  isUser: false,
  isLoggedIn: false,
  isLike: false,
  isAdmin: false,
};

export default PostComponent;
