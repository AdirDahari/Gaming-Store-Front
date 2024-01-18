import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MainLinks from "./ui/MainLinks";

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 3 }}>
      <AppBar position="static" sx={{ borderRadius: "10px" }}>
        <Toolbar>
          <Typography variant="h4">Gamming Store</Typography>
          <MainLinks />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
