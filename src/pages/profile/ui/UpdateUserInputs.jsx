import { Box, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

const UpdateUserInputs = ({ inputsValue, handleInputsChange }) => {
  return (
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
  );
};

UpdateUserInputs.propTypes = {
  inputsValue: PropTypes.object.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
};

export default UpdateUserInputs;
