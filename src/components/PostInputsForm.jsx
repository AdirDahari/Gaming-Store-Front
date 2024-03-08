import { TextField, Grid, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import nextId from "react-id-generator";

const PostInputsForm = ({
  gameDetails,
  errorsState,
  platforms,
  status,
  categoryOptions,
  handleInputsChange,
  handleOptionChange,
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
          defaultValue={gameDetails.name ? gameDetails.name : ""}
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
          defaultValue={gameDetails.platform ? gameDetails.platform : ""}
          value={gameDetails.platform}
          onChange={handleOptionChange}
          error={errorsState && errorsState.platform ? true : false}
          helperText={
            errorsState && errorsState.platform
              ? errorsState.platform
              : "Please select your platform"
          }
        >
          {platforms.map((option) => (
            <MenuItem key={nextId()} value={option}>
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
          defaultValue={
            gameDetails.productStatus ? gameDetails.productStatus : ""
          }
          value={gameDetails.productStatus}
          onChange={handleOptionChange}
          error={errorsState && errorsState.productStatus ? true : false}
          helperText={
            errorsState && errorsState.productStatus
              ? errorsState.productStatus
              : "Please select product status"
          }
        >
          {status.map((option) => (
            <MenuItem key={nextId()} value={option}>
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
          defaultValue={gameDetails.cate0 ? gameDetails.cate0 : ""}
          value={gameDetails.cate0}
          onChange={handleOptionChange}
          error={errorsState && errorsState.cate0 ? true : false}
          helperText={errorsState && errorsState.cate0 ? errorsState.cate0 : ""}
        >
          {categoryOptions.map((option) => (
            <MenuItem key={nextId()} value={option}>
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
          defaultValue={gameDetails.cate1 ? gameDetails.cate1 : ""}
          value={gameDetails.cate1}
          onChange={handleOptionChange}
        >
          {categoryOptions.map((option) => (
            <MenuItem key={nextId()} value={option}>
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
          defaultValue={gameDetails.cate2 ? gameDetails.cate2 : ""}
          value={gameDetails.cate2}
          onChange={handleOptionChange}
        >
          {categoryOptions.map((option) => (
            <MenuItem key={nextId()} value={option}>
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
          defaultValue={gameDetails.url0 ? gameDetails.url0 : ""}
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
          defaultValue={gameDetails.url1 ? gameDetails.url1 : ""}
          onChange={handleInputsChange}
          error={errorsState && errorsState.url1 ? true : false}
          helperText={errorsState && errorsState.url1 ? errorsState.url1 : ""}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="url2"
          name="url2"
          label="Image URL"
          fullWidth
          variant="standard"
          defaultValue={gameDetails.url2 ? gameDetails.url2 : ""}
          onChange={handleInputsChange}
          error={errorsState && errorsState.url2 ? true : false}
          helperText={errorsState && errorsState.url2 ? errorsState.url2 : ""}
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
          defaultValue={gameDetails.price ? gameDetails.price : ""}
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
          defaultValue={gameDetails.description ? gameDetails.description : ""}
        />
      </Grid>
    </Grid>
  );
};

PostInputsForm.propTypes = {
  gameDetails: PropTypes.object.isRequired,
  errorsState: PropTypes.object,
  platforms: PropTypes.array.isRequired,
  status: PropTypes.array.isRequired,
  categoryOptions: PropTypes.array.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};

export default PostInputsForm;
