import { Box, Grid, Typography } from "@mui/material";
import CategoryComponent from "../../components/CategoryComponent";
import { platforms } from "../../layout/myLists";
import SwiperHomeImages from "./ui/SwiperHomeImages";
import nextId from "react-id-generator";
const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          maxWidth: 1900,
          margin: "0 auto",
        }}
      >
        <SwiperHomeImages />
      </Box>
      <Box sx={{ m: "0 auto", pt: 4 }}>
        <Typography
          fontFamily="alata"
          textAlign="center"
          variant="h4"
          component="h1"
        >
          Welcome to Gaming Store
        </Typography>
        <Typography
          fontFamily="alata"
          textAlign="center"
          variant="h6"
          component="p"
        >
          Here you can find second hand games and login to trade your games,
        </Typography>
        <Typography
          fontFamily="alata"
          textAlign="center"
          variant="h6"
          component="p"
        >
          Choose your platform
        </Typography>
      </Box>
      <Grid container m="0 auto" maxWidth={1200} pt={8} pb={8}>
        {platforms.map((plat) => (
          <Grid item xs={12} sm={6} md={3} key={nextId()} p={2}>
            <CategoryComponent>{plat}</CategoryComponent>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default HomePage;
