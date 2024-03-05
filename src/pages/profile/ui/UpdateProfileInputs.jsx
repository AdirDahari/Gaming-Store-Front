import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

const UpdateProfileInputs = ({
  inputsValue,
  handleInputsChange,
  errorsState,
}) => {
  return (
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
          helperText={errorsState && errorsState.first ? errorsState.first : ""}
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
          helperText={errorsState && errorsState.last ? errorsState.last : ""}
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
          helperText={errorsState && errorsState.phone ? errorsState.phone : ""}
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
            errorsState && errorsState.country ? errorsState.country : ""
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
          helperText={errorsState && errorsState.city ? errorsState.city : ""}
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
  );
};

UpdateProfileInputs.propTypes = {
  inputsValue: PropTypes.object.isRequired,
  errorsState: PropTypes.object,
  handleInputsChange: PropTypes.func.isRequired,
};

export default UpdateProfileInputs;
