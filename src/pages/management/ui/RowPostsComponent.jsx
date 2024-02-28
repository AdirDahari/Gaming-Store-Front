import { TableCell, TableRow } from "@mui/material";
import OptionsButton from "./OptionsButton";
import PropTypes from "prop-types";

const RowPostsComponent = ({
  _id,
  name,
  platform,
  price,
  userId,
  onDeleteCard,
  onEditPost,
}) => {
  const handleDeleteClick = (_id) => {
    onDeleteCard(_id);
  };
  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{platform}</TableCell>
      <TableCell align="left">{price}</TableCell>
      <TableCell align="left">{userId}</TableCell>
      <TableCell align="right">
        {/* <OptionsButton
          _id={_id}
          onDeleteClick={handleDeleteClick}
          onEditClick={onEditCard}
        /> */}
      </TableCell>
    </TableRow>
  );
};

RowPostsComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onEditPost: PropTypes.func.isRequired,
};

export default RowPostsComponent;
