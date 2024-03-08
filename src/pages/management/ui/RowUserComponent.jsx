import { TableCell, TableRow } from "@mui/material";

import PropTypes from "prop-types";
import { Fragment } from "react";
import OptionsButtonUsers from "./OptionsButtonUsers";

const RowUserComponent = ({
  _id,
  name,
  email,
  phone,
  country,
  onDeleteUser,
  onIsAdmin,
  isAdmin,
}) => {
  const handleDeleteClick = () => {
    onDeleteUser(_id);
  };
  const handleIsAdminClick = () => {
    onIsAdmin(_id);
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
          <OptionsButtonUsers
            isAdmin={isAdmin}
            onDeleteClick={handleDeleteClick}
            onIsAdminClick={handleIsAdminClick}
          />
          {/* <IconButton onClick={handleClick}>
            <DeleteIcon />
          </IconButton> */}
        </TableCell>
      </TableRow>
      {/* <Popover
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
      </Popover> */}
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
  onIsAdmin: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default RowUserComponent;
