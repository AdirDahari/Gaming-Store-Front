import "../style/post.css";
import { Box, Button, Popover } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const PostComponent = ({
  _id,
  name,
  price,
  image,
  color,
  onBuyNowClick,
  onEditClick,
  onDeleteClick,
  onLikeClick,
  isUser,
  isLoggedIn,
  isLike,
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
    <>
      <Box
        m="0 auto"
        maxWidth={350}
        className="post-card"
        sx={{
          background: `linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0.5) 99.15%
        ),
        url(${image}),
        lightgray -13.481px -202.136px / 107.344% 188.488% no-repeat`,
          backgroundSize: "contain",
        }}
      >
        {isLoggedIn ? (
          <Box className="post-icons-container">
            {isUser && (
              <Box className="post-two-icon">
                <button onClick={handleEditClick} className="post-icon">
                  <img
                    className="post-svg"
                    src="/assets/img/post/Edit.svg"
                    alt="Edit icon"
                  />
                </button>
                <button onClick={handleClick} className="post-icon">
                  <img
                    className="post-svg"
                    src="/assets/img/post/Trash.svg"
                    alt="trash icon"
                  />
                </button>
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
              </Box>
            )}
            {isLike ? (
              <button onClick={handleLikeClick} className="post-one-icon">
                <img
                  className="post-svg"
                  src="/assets/img/post/Heart.svg"
                  alt="heart icon"
                />
              </button>
            ) : (
              <button onClick={handleLikeClick} className="post-one-icon">
                <img
                  className="post-svg"
                  src="/assets/img/post/EmptyHeart.svg"
                  alt="empty heart icon"
                />
              </button>
            )}
          </Box>
        ) : (
          <Box sx={{ height: "73.88px" }} />
        )}

        <Box className="post-rectangle"></Box>
        <Box className="post-section">
          <Box className="post-title-container">
            <Box className="post-title">
              <p className="post-title-text">{name}</p>
            </Box>
          </Box>
          <Box className="post-details">
            <Box className="post-button">
              <Button
                onClick={handleBuyNowClick}
                sx={{ bgcolor: "#282C35", ":hover": { bgcolor: color } }}
                variant="contained"
              >
                BUY NOW
              </Button>
            </Box>
            <p className="post-price">₪{price}</p>
          </Box>
        </Box>
      </Box>
    </>
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
};

export default PostComponent;
