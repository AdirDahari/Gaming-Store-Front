import {
  Grid,
  Box,
  Typography,
  Divider,
  Button,
  Avatar,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import DeleteProfileDialog from "./DeleteProfileDialog";

const UpdateProfileForm = ({
  inputsValue,
  errorsState,
  handleInputsChange,
  handleUpdateProfile,
  handleDeleteProfile,
  profileImage,
  email,
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
          <Box sx={{ pt: 4, pb: 4 }} component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  name="first"
                  required
                  fullWidth
                  id="first"
                  label="First Name"
                  value={inputsValue.first}
                  onChange={handleInputsChange}
                  error={errorsState && errorsState.first ? true : false}
                  helperText={
                    errorsState && errorsState.first ? errorsState.first : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  name="middle"
                  fullWidth
                  id="middle"
                  label="Middle Name"
                  value={inputsValue.middle}
                  onChange={handleInputsChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  required
                  name="last"
                  fullWidth
                  id="last"
                  label="Last Name"
                  value={inputsValue.last}
                  onChange={handleInputsChange}
                  error={errorsState && errorsState.last ? true : false}
                  helperText={
                    errorsState && errorsState.last ? errorsState.last : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  required
                  name="phone"
                  fullWidth
                  id="phone"
                  label="Phone number"
                  value={inputsValue.phone}
                  onChange={handleInputsChange}
                  error={errorsState && errorsState.phone ? true : false}
                  helperText={
                    errorsState && errorsState.phone ? errorsState.phone : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  name="url"
                  fullWidth
                  id="url"
                  label="Profile image (url)"
                  value={inputsValue.url}
                  onChange={handleInputsChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  name="state"
                  fullWidth
                  id="state"
                  label="State"
                  value={inputsValue.state}
                  onChange={handleInputsChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  required
                  name="country"
                  fullWidth
                  id="country"
                  label="Country"
                  value={inputsValue.country}
                  onChange={handleInputsChange}
                  error={errorsState && errorsState.country ? true : false}
                  helperText={
                    errorsState && errorsState.country
                      ? errorsState.country
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  required
                  name="city"
                  fullWidth
                  id="city"
                  label="City"
                  value={inputsValue.city}
                  onChange={handleInputsChange}
                  error={errorsState && errorsState.city ? true : false}
                  helperText={
                    errorsState && errorsState.city ? errorsState.city : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  required
                  name="street"
                  fullWidth
                  id="street"
                  label="Street"
                  value={inputsValue.street}
                  onChange={handleInputsChange}
                  error={errorsState && errorsState.street ? true : false}
                  helperText={
                    errorsState && errorsState.street ? errorsState.street : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  required
                  name="houseNumber"
                  fullWidth
                  id="houseNumber"
                  label="House number"
                  value={inputsValue.houseNumber}
                  onChange={handleInputsChange}
                  error={errorsState && errorsState.houseNumber ? true : false}
                  helperText={
                    errorsState && errorsState.houseNumber
                      ? errorsState.houseNumber
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  name="zip"
                  fullWidth
                  id="zip"
                  label="Zip"
                  value={inputsValue.zip}
                  onChange={handleInputsChange}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider variant="middle" sx={{ pt: 2 }} />
          <Box sx={{ pt: 4, display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={handleUpdateProfile}>
              Update
            </Button>
          </Box>
        </Box>
        <DeleteProfileDialog
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
          <Typography variant="h5" sx={{ textAlign: "center", p: 2, pb: 4 }}>
            {email}
          </Typography>
          <Button
            color="error"
            variant="outlined"
            onClick={handleClickOpen}
            sx={{ display: "block", m: "0 auto" }}
          >
            Delete Profile
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

UpdateProfileForm.propTypes = {
  inputsValue: PropTypes.object.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
  handleUpdateProfile: PropTypes.func.isRequired,
  handleDeleteProfile: PropTypes.func.isRequired,
  profileImage: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errorsState: PropTypes.object,
};

export default UpdateProfileForm;
