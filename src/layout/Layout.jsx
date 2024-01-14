import NavigationBar from "./header/NavigationBar";
import Main from "./main/Main";
import Typography from "@mui/material/Typography";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Main>
        <Typography>Main</Typography>
      </Main>
    </>
  );
};
export default Layout;
