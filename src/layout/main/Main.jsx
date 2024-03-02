import PropTypes from "prop-types";
import { Container } from "@mui/material";

const Main = ({ children }) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ minHeight: "80vh", bgcolor: "#ededed", pl: 0, pr: 0 }}
    >
      {children}
    </Container>
  );
};

Main.propTypes = {
  children: PropTypes.any,
};
export default Main;
