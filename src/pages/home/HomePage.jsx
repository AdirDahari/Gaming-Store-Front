import { Box, Grid, Typography } from "@mui/material";
import CategoryComponent from "../../components/CategoryComponent";
import { platforms } from "../../layout/myLists";
import SwiperHomeImages from "./ui/SwiperHomeImages";
import nextId from "react-id-generator";

const HomePage = () => {
  return (
    <Box>
      {/* Hero Swiper Section */}
      <Box
        sx={{
          position: "relative",
          maxWidth: 1900,
          margin: "0 auto",
        }}
      >
        <SwiperHomeImages />
      </Box>

      {/* Welcome Text Section */}
      <Box sx={{ m: "0 auto", pt: 4, textAlign: "center", px: 2 }}>
        <Typography fontFamily="alata" variant="h4" component="h1" gutterBottom>
          Welcome to Gaming Store
        </Typography>
        <Typography fontFamily="alata" variant="h6" component="p" gutterBottom>
          Find second-hand games & trade your old ones!
        </Typography>
        <Typography fontFamily="alata" variant="h6" component="p">
          Choose your platform:
        </Typography>
      </Box>

      {/* Category Section */}
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: 1200,
          mx: "auto",
          pt: 6,
          pb: 8,
          px: 2,
        }}
      >
        {platforms.map((plat) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={nextId()}>
            <CategoryComponent>{plat}</CategoryComponent>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
