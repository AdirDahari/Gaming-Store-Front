import { Box, Grid } from "@mui/material";
import CategoryComponent from "../../components/CategoryComponent";
import { categories } from "../../layout/myLink";
import SwiperImages from "../../components/SwiperImages";

const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: 650,
          margin: "0 auto",
          maxWidth: 1200,
          borderRadius: "5px",
          overflow: "hidden",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <SwiperImages />
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
