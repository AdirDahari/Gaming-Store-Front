import GameForm from "./ui/GameForm.jsx";
import Review from "./ui/Review.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../routes/ROUTES.js";
import { editPostNormalization } from "./editPostNoramalization.js";

const steps = ["Game details", "Update your post"];

const getStepContent = (
  step,
  funcNext,
  funcBack,
  funcSubmit,
  userDetails,
  gameDetails
) => {
  switch (step) {
    case 0:
      return <GameForm handleNext={funcNext} />;
    case 1:
      return (
        <Review
          handleBack={funcBack}
          userDetails={userDetails}
          gameDetails={gameDetails}
          handleSubmit={funcSubmit}
        />
      );
    default:
      throw new Error("Unknown step");
  }
};

const EditPostPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userDetails, setUserDetails] = useState(null);
  const [gameDetails, setGameDetails] = useState(null);
  const navigate = useNavigate();

  const handleNext = async (gameDetailsValues) => {
    try {
      const { data: myUser } = await axios.get("users/my-user");
      setUserDetails(myUser);
      setGameDetails(gameDetailsValues);
      setActiveStep(activeStep + 1);
    } catch (err) {
      console.log("handleNext", err);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const request = editPostNormalization(gameDetails, userDetails);
      await axios.post("/posts", request);
      navigate(ROUTE.HOME);
    } catch (err) {
      console.log("handleSubmit", err);
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Edit Post
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Fragment></Fragment>
          ) : (
            <Fragment>
              {getStepContent(
                activeStep,
                handleNext,
                handleBack,
                handleSubmit,
                userDetails,
                gameDetails
              )}
            </Fragment>
          )}
        </Paper>
      </Container>
    </Fragment>
  );
};
export default EditPostPage;
