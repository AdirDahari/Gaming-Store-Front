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
import { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import RangeSlider from "./RangeSlider";
import PropTypes from "prop-types";

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

const status = ["all", "new", "like new", "used"];

const SortComponent = ({
  onSearchChange,
  onInputsChange,
  categoriesData,
  maxPrice,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState(["all"]);
  const [priceRange, setPriceRange] = useState(null);
  const [txt, setTxt] = useState("");
  const [filterInputs, setFilterInputs] = useState({
    categoties: "all",
    productStatus: "all",
    priceRange: [],
  });

  useEffect(() => {
    setCategoriesFilter(["all", ...categoriesData]);
    setPriceRange([0, maxPrice]);
  }, []);

  const handleTxtChange = (e) => {
    setTxt(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
    if (isFilterOpen) {
      onInputsChange(null);
      setFilterInputs({
        categoties: "all",
        productStatus: "all",
        priceRange: [],
      });
    }
  };

  const handleOptionChange = (e) => {
    setFilterInputs((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
    onInputsChange({ ...filterInputs, [e.target.name]: e.target.value });
  };

  const handleRangeChange = (range) => {
    setFilterInputs((currentState) => ({
      ...currentState,
      priceRange: range,
    }));
    onInputsChange({ ...filterInputs, priceRange: range });
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 600, m: "0 auto", mt: 2 }}>
      <AppBar
        position="static"
        sx={{ borderRadius: "15px", backgroundColor: "lightgray" }}
      >
        <Toolbar>
          <IconButton onClick={handleFilterClick}>
            {isFilterOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <FilterListIcon fontSize="large" />
            )}
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
              value={txt}
              onChange={handleTxtChange}
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
                  name="categoties"
                  select
                  label="Categoties"
                  fullWidth
                  defaultValue="all"
                  onChange={handleOptionChange}
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
                  onChange={handleOptionChange}
                >
                  {status.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                {priceRange && (
                  <RangeSlider
                    range={priceRange}
                    onRangeChange={handleRangeChange}
                  />
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </Collapse>
      </AppBar>
    </Box>
  );
};

SortComponent.propTypes = {
  onInputsChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  categoriesData: PropTypes.array.isRequired,
  maxPrice: PropTypes.number.isRequired,
};

export default SortComponent;
