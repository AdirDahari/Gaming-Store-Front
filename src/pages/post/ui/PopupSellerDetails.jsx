import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../../style/postPage.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 400 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const PopupSellerDetails = ({ name, phone, city, onClose, open }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ p: 1 }}>
          <p className="postpage-popup-title">First name:</p>
          <p className="postpage-popup-des">{name}</p>
        </Box>
        <Box sx={{ p: 1 }}>
          <p className="postpage-popup-title">City:</p>
          <p className="postpage-popup-des">{city}</p>
        </Box>
        <Box sx={{ p: 1 }}>
          <p className="postpage-popup-title">Phone:</p>
          <p className="postpage-popup-des">{phone}</p>
        </Box>
      </Box>
    </Modal>
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
