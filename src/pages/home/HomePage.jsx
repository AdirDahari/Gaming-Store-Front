import { Box, Grid } from "@mui/material";
import CategoryComponent from "../../components/CategoryComponent";
import { categories } from "../../layout/myLink";
import SwiperHomeImages from "./ui/SwiperHomeImages";
const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <SwiperHomeImages />
      </Box>

      <Grid container m="0 auto" maxWidth={650} pt={8} pb={8}>
        {categories.map((cate, index) => (
          <Grid item xs={12} sm={6} key={index} p={2}>
            <CategoryComponent>{cate}</CategoryComponent>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default HomePage;
