import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { CardMedia, CardContent, Box, Typography } from "@mui/material";
import { Fragment } from "react";

const post = {
  title: "aaa",
  date: "aaa",
  description: "aaa",
  image: "../../../public/assets/img/categories/Playstation.jpg",
  alt: "aaa",
};

const ShopPage = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          backgroundImage: `url(${"../../../public/assets/img/PlaystationBG.jpg"})`,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          flexGrow: 1,
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "blue",
          mt: 2,
          flexGrow: 1,
        }}
      >
        <Typography textAlign="center" variant="h5" color="white">
          Sort items
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ maxWidth: 1000, m: "30px auto" }}>
        <Grid item xs={12} sx={{ m: "0 auto" }}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  More details...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.alt}
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sx={{ m: "0 auto" }}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  More details...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.alt}
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sx={{ m: "0 auto" }}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  More details...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.alt}
              />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ShopPage;
