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
  onShowPostClick,
  onEditPost,
}) => {
  const handleDeleteClick = () => {
    onDeleteCard(_id);
  };
  const handleShowPostClick = () => {
    onShowPostClick(_id);
  };
  const handleEditPostClick = () => {
    onEditPost(_id);
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
        <OptionsButton
          onShowPostClick={handleShowPostClick}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditPostClick}
        />
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
  onShowPostClick: PropTypes.func.isRequired,
};

export default RowPostsComponent;
