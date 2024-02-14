import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Collapse,
  Grid,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import RangeSlider from "./RangeSlider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const status = ["new", "like new", "used"];

const SortComponent = () => {
  const [isFilterOpen, setisFilterOpen] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState([
    "aaa",
    "bbb",
    "ccc",
  ]);

  const handleFilterClick = () => {
    setisFilterOpen(!isFilterOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 600, m: "0 auto", mt: 2 }}>
      <AppBar
        position="static"
        sx={{ borderRadius: "15px", backgroundColor: "lightgray" }}
      >
        <Toolbar>
          {/* <FilterIconComponent /> */}
          <IconButton onClick={handleFilterClick}>
            <FilterListIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              ml: 2,
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "black" },
            }}
          >
            Filter
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
        <Collapse in={isFilterOpen}>
          <Toolbar>
            <Grid container spacing={1} sx={{ pt: 1, pb: 1 }}>
              <Grid item xs={4} sx={{ mt: 1.5 }}>
                <TextField
                  size="small"
                  name="productStatus"
                  select
                  label="Categoties"
                  fullWidth
                  defaultValue="all"
                >
                  {categoriesFilter.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4} sx={{ mt: 1.5 }}>
                <TextField
                  size="small"
                  name="productStatus"
                  select
                  label="Status"
                  fullWidth
                  defaultValue="all"
                >
                  {status.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <RangeSlider />
              </Grid>
            </Grid>
          </Toolbar>
        </Collapse>
      </AppBar>
    </Box>
  );
};

export default SortComponent;
