import { TableCell, TableRow, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

const RowUserComponent = ({
  _id,
  name,
  email,
  phone,
  country,
  onDeleteUser,
}) => {
  const handleDeleteClick = () => {
    onDeleteUser(_id);
  };

  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{phone}</TableCell>
      <TableCell align="left">{country}</TableCell>
      <TableCell align="left">{_id}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

RowUserComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onEditUser: PropTypes.func.isRequired,
};

export default RowUserComponent;
