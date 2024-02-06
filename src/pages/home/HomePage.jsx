import { Box, Typography, Grid } from "@mui/material";
import CategoryComponent from "../../components/CategoryComponent";
import { Fragment } from "react";
import { categories } from "../../layout/myLink";

const HomePage = () => {
  return (
    <Fragment>
      <Box sx={{ bgcolor: "lightblue", height: 350 }}>
        <Typography textAlign="center" variant="h3">
          Here you can find second hand video games!
        </Typography>
      </Box>
      <Grid container spacing={2} m="0 auto" maxWidth={1000}>
        {categories.map((cate, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <CategoryComponent>{cate}</CategoryComponent>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
export default HomePage;
