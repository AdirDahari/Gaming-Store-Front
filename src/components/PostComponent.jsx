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

const PostComponent = ({ post, color }) => {
  return (
    <Card
      sx={{
        border: `1px solid ${color}`,
        borderRadius: "15px",
        p: 1,
        minHeight: 550,
        maxHeight: 550,
      }}
    >
      <CardContent sx={{ height: 350 }}>
        <CardContent sx={{ maxHeight: 350 }}>
          <CardContent
            sx={{
              margin: "0 auto",
              minHeight: 250,
              maxHeight: 300,
              maxWidth: 250,
              display: "flex",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              className="image"
              component="img"
              sx={{
                borderRadius: "10px",
                width: "100%",
                m: "0 auto",
              }}
              image={post.game.images[0].url}
              alt={post.game.images[0].alt}
            />
          </CardContent>
        </CardContent>
        <Typography
          variant="h5"
          noWrap
          sx={{ textAlign: "center", fontWeight: "500", p: 2 }}
        >
          {post.game.name}
        </Typography>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <CardActions>
            <Button sx={{ minWidth: 110 }} variant="contained">
              Buy now
            </Button>
          </CardActions>
          <Typography sx={{ fontWeight: "600", p: 1 }} variant="h5">
            &#8362; {post.game.price}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

PostComponent.propTypes = {
  post: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};

export default PostComponent;
