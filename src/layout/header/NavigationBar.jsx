import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 3, opacity: 0.5 }}>
      <AppBar position="static" sx={{ borderRadius: "10px" }}>
        <Toolbar>
          <img
            alt="logo"
            src="../../../public/assets/img/profile.png"
            style={{
              width: 65,
              height: 65,
              padding: "10px",
              borderRadius: "50%",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
