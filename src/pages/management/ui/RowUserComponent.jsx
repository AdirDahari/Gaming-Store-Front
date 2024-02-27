import { TableCell, TableRow } from "@mui/material";
import OptionsButton from "./OptionsButton";
import PropTypes from "prop-types";

const RowUserComponent = ({
  _id,
  name,
  email,
  phone,
  onDeleteUser,
  onEditUser,
}) => {
  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">
        <OptionsButton
          onDeleteClick={onDeleteUser}
          onEditClick={onEditUser}
          _id={_id}
        />
      </TableCell>
    </TableRow>
  );
};

RowUserComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onEditUser: PropTypes.func.isRequired,
};

export default RowUserComponent;
