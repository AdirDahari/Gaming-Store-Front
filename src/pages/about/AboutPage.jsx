import { Typography, Box, Grid, ImageList, ImageListItem } from "@mui/material";
import { Fragment } from "react";
import { itemData, itemDataMobile } from "./imagesList";
import nextId from "react-id-generator";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const AboutPage = () => {
  return (
    <Fragment>
      <Grid container maxWidth={1200} m="0 auto" pt={6} pb={4}>
        <Grid item sm={12} md={6}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" pb={2}>
              Welcome to Gamming Store
            </Typography>
            <Typography variant="subtitle1" pb={4}>
              At Gamming Store, we&apos;re passionate about gaming. We
              understand the thrill of discovering a hidden gem or finding the
              perfect addition to your gaming collection. That&apos;s why
              we&apos;ve created a space where gamers like you can buy, sell,
              and trade pre-owned games.
            </Typography>
            <Typography variant="h5" pb={2}>
              Our Story
            </Typography>
            <Typography variant="subtitle1" pb={4}>
              Founded by a avid gamer, Gamming Store was born out of a shared
              love for gaming and a desire to create a community-driven
              platform. Thus, we set out on a mission to build a platform where
              gamers can connect, trade, and explore the world of gaming
              together.
            </Typography>
            <Typography variant="h5" pb={2}>
              Community Engagement
            </Typography>
            <Typography variant="subtitle1" pb={4}>
              We believe that gaming is more than just a hobby—it&apos;s a
              community. That&apos;s why we&apos;re committed to fostering a
              vibrant and inclusive gaming community. Join us and trade your
              games to discover and help gamers enjoy a wide selection at a fair
              price
            </Typography>
            <Typography variant="h5" pb={2}>
              Our Mission
            </Typography>
            <Typography variant="subtitle1" pb={4}>
              Our mission is simple: to provide gamers with a reliable and
              convenient platform to buy, sell, and trade games.
            </Typography>
            <Typography variant="h5" pb={2}>
              Get in Touch
            </Typography>
            <Typography variant="subtitle1" pb={4}>
              To see the project go to my Github or contact us via email or
              linkedin in the linkes down below.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <ImageList
            sx={{
              maxWidth: 550,
              pt: 5.5,
              m: "0 auto",
              display: { xs: "none", sm: "none", md: "grid" },
            }}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={nextId()}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <ImageList
            sx={{
              maxWidth: 500,
              pt: 8,
              m: "0 auto",
              display: { xs: "grid", sm: "grid", md: "none" },
            }}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {itemDataMobile.map((item) => (
              <ImageListItem
                key={nextId()}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutPage;
