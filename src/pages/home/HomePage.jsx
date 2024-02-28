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
      <Grid container m="0 auto" maxWidth={650}>
        {categories.map((cate, index) => (
          <Grid item xs={12} sm={6} key={index} p={2}>
            <CategoryComponent>{cate}</CategoryComponent>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
export default HomePage;
