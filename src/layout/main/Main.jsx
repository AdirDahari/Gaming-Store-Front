import PropTypes from "prop-types";
import { Container } from "@mui/material";

const Main = ({ children }) => {
  return (
    <Container maxWidth={false} sx={{ minHeight: "80vh", bgcolor: "#ededed" }}>
      {children}
    </Container>
  );
};

Main.propTypes = {
  children: PropTypes.any,
};
export default Main;
