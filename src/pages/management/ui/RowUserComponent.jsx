import {
  TableCell,
  TableRow,
  IconButton,
  Popover,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";

const RowUserComponent = ({
  _id,
  name,
  email,
  phone,
  country,
  onDeleteUser,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleDeleteClick = () => {
    onDeleteUser(_id);
  };

  return (
    <Fragment>
      <TableRow hover>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="left">{email}</TableCell>
        <TableCell align="left">{phone}</TableCell>
        <TableCell align="left">{country}</TableCell>
        <TableCell align="left">{_id}</TableCell>
        <TableCell align="right">
          <IconButton onClick={handleClick}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Button onClick={handleDeleteClick} color="error" sx={{ p: 2 }}>
          Delete User
        </Button>
      </Popover>
    </Fragment>
  );
};

RowUserComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default RowUserComponent;
