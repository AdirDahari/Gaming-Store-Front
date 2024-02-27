import { TableCell, TableRow } from "@mui/material";
import OptionsButton from "./OptionsButton";
import PropTypes from "prop-types";

const RowPostsComponent = ({
  _id,
  title,
  email,
  phone,
  onDeleteCard,
  onEditCard,
}) => {
  const handleReturnData = (_id) => {
    onDeleteCard(_id);
  };
  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">
        <OptionsButton
          _id={_id}
          onDeleteClick={handleReturnData}
          onEditClick={onEditCard}
        />
      </TableCell>
    </TableRow>
  );
};

RowPostsComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
};

export default RowPostsComponent;
