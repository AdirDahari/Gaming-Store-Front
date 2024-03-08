import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import PropTypes from "prop-types";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "8px 8px",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const OptionsButtonUsers = ({ onDeleteClick, onIsAdminClick, isAdmin }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adminSwitch, setAdminSwitch] = useState(isAdmin);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleIsAdminClick = () => {
    setAdminSwitch(!adminSwitch);
    onIsAdminClick();
  };
  const handleDeleteClick = () => {
    setAnchorEl(null);
    onDeleteClick();
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box onClick={handleIsAdminClick}>
          <FormControlLabel
            sx={{ pl: 1 }}
            control={
              <Switch checked={adminSwitch} onChange={handleIsAdminClick} />
            }
            label="Is Admin"
          />
        </Box>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleDeleteClick} disableRipple>
          <DeleteIcon />
          Delete User
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

OptionsButtonUsers.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onIsAdminClick: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default OptionsButtonUsers;
