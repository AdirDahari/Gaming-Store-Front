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
    <Card sx={{ border: `1px solid ${color}`, p: 1, minHeight: 450 }}>
      <CardContent>
        <CardContent sx={{ margin: "0 auto" }}>
          <CardMedia
            className="image"
            sx={{
              p: 2,
              overflow: "hidden",
              maxWidth: 200,
              margin: "0 auto",
            }}
            component="img"
            image={post.game.images[0].url}
            alt={post.game.images[0].alt}
          />

          <Typography variant="h5" noWrap sx={{ textAlign: "center" }}>
            {post.game.name}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <CardActions>
            <Button variant="contained">Buy now</Button>
          </CardActions>
          <Typography sx={{ fontWeight: "600", p: 2 }} variant="h5">
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
