import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const PopupSellerDetails = ({ name, phone, city, onClose, open }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Contact details</DialogTitle>
      <List>
        <ListItem>
          <ListItemText>Name: {name}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>City: {city}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Phone: {phone}</ListItemText>
        </ListItem>
      </List>
    </Dialog>
  );
};

PopupSellerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupSellerDetails;
