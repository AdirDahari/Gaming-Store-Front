import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
  color: "#f9f9f9",
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

const SearchComponent = ({ txt, onTxtChange }) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#f9f9f9" }} />
      </SearchIconWrapper>
      <StyledInputBase
        value={txt}
        onChange={onTxtChange}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

SearchComponent.propTypes = {
  txt: PropTypes.string.isRequired,
  onTxtChange: PropTypes.func.isRequired,
};

export { SearchComponent as Search };
