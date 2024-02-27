import { Grid, Box, Typography, Divider, Button, Avatar } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import DeleteProfileDialogAdmin from "./DeleteProfileDialogAdmin";
import ProfileFormComponent from "../../../components/ProfileFormComponent";

const ViewProfileForm = ({
  inputsValue,
  handleInputsChange,
  handleUpdateProfile,
  handleDeleteProfile,
  profileImage,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: 1200,
        m: "0 auto",
        p: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={7} sx={{ order: { xs: 1, sm: 1, md: 0 } }}>
        <Box
          sx={{
            bgcolor: "#f9f9f9",
            p: 2,
            pb: 2,
            borderRadius: "5px",
            boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
          }}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              p: 2,
              bgcolor: "#A32CC4",
              borderRadius: "5px",
            }}
          >
            <Typography color="#f9f9f9" variant="h5">
              Edit Profile
            </Typography>
            <Typography color="#f9f9f9" sx={{ pl: 1 }}>
              Complate your profile
            </Typography>
          </Box>
          <ProfileFormComponent
            inputsValue={inputsValue}
            handleInputsChange={handleInputsChange}
          />
          <Divider variant="middle" sx={{ pt: 2 }} />
          <Box sx={{ pt: 4, display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={handleUpdateProfile}>
              Update
            </Button>
            <Button color="error" variant="outlined" onClick={handleClickOpen}>
              Delete
            </Button>
          </Box>
        </Box>
        <DeleteProfileDialogAdmin
          open={open}
          handleClose={handleClose}
          handleDeleteProfile={handleDeleteProfile}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={5} sx={{ m: "0 auto" }}>
        <Box sx={{ pt: 4, maxWidth: 250, overflow: "hidden", m: "0 auto" }}>
          <Avatar
            alt="Remy Sharp"
            src={profileImage}
            sx={{
              width: { xs: 200, sm: 250 },
              height: { xs: 200, sm: 250 },
              m: "0 auto",
            }}
          />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center", p: 2 }}>
            {inputsValue.email}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

ViewProfileForm.propTypes = {
  inputsValue: PropTypes.object.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
  handleUpdateProfile: PropTypes.func.isRequired,
  handleDeleteProfile: PropTypes.func.isRequired,
  profileImage: PropTypes.string.isRequired,
};

export default ViewProfileForm;
