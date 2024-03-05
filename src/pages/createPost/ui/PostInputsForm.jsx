import { TextField, Grid, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

const PostInputsForm = ({
  errorsState,
  platformValue,
  platforms,
  status,
  cate0Value,
  cate1Value,
  cate2Value,
  statusValue,
  categoryOptions,
  handleInputsChange,
  handlePlatformChange,
  handleCategoryChange,
  handleStatusChange,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          id="name"
          name="name"
          label="Game name"
          fullWidth
          autoComplete="platform-name"
          variant="standard"
          onChange={handleInputsChange}
          error={errorsState && errorsState.name ? true : false}
          helperText={errorsState && errorsState.name ? errorsState.name : ""}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="platform"
          select
          label="Platform"
          fullWidth
          defaultValue={platformValue ? platformValue : ""}
          value={platformValue}
          onChange={handlePlatformChange}
          error={errorsState && errorsState.platform ? true : false}
          helperText={
            errorsState && errorsState.platform
              ? errorsState.platform
              : "Please select your platform"
          }
        >
          {platforms.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="productStatus"
          select
          label="Product status"
          fullWidth
          defaultValue={statusValue ? statusValue : ""}
          value={statusValue}
          onChange={handleStatusChange}
          error={errorsState && errorsState.productStatus ? true : false}
          helperText={
            errorsState && errorsState.productStatus
              ? errorsState.productStatus
              : "Please select product status"
          }
        >
          {status.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          required
          select
          name="cate0"
          label="Category 1"
          fullWidth
          defaultValue={cate0Value ? cate0Value : ""}
          value={cate0Value}
          onChange={handleCategoryChange}
          error={errorsState && errorsState.cate0 ? true : false}
          helperText={errorsState && errorsState.cate0 ? errorsState.cate0 : ""}
        >
          {categoryOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          name="cate1"
          label="Category 2"
          fullWidth
          defaultValue={cate1Value ? cate1Value : ""}
          value={cate1Value}
          onChange={handleCategoryChange}
        >
          {categoryOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          name="cate2"
          label="Category 3"
          fullWidth
          defaultValue={cate2Value ? cate2Value : ""}
          value={cate2Value}
          onChange={handleCategoryChange}
        >
          {categoryOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="url0"
          name="url0"
          label="Image URL"
          fullWidth
          variant="standard"
          onChange={handleInputsChange}
          error={errorsState && errorsState.url0 ? true : false}
          helperText={errorsState && errorsState.url0 ? errorsState.url0 : ""}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="url1"
          name="url1"
          label="Image URL"
          fullWidth
          variant="standard"
          onChange={handleInputsChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="url2"
          name="url2"
          label="Image URL"
          fullWidth
          variant="standard"
          onChange={handleInputsChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
        <TextField
          id="price"
          label="Price"
          type="number"
          onChange={handleInputsChange}
          error={errorsState && errorsState.price ? true : false}
          helperText={errorsState && errorsState.price ? errorsState.price : ""}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="description"
          label="Description"
          multiline
          fullWidth
          rows={2}
          variant="standard"
          onChange={handleInputsChange}
        />
      </Grid>
    </Grid>
  );
};

PostInputsForm.propTypes = {
  errorsState: PropTypes.object.isRequired,
  platformValue: PropTypes.string.isRequired,
  platforms: PropTypes.array.isRequired,
  status: PropTypes.array.isRequired,
  cate0Value: PropTypes.string.isRequired,
  cate1Value: PropTypes.string.isRequired,
  cate2Value: PropTypes.string.isRequired,
  statusValue: PropTypes.string.isRequired,
  categoryOptions: PropTypes.array.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
  handlePlatformChange: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
};

export default PostInputsForm;
