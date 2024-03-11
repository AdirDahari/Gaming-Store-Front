import GameForm from "./ui/GameForm.jsx";
import Review from "./ui/Review.jsx";
import Box from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Fragment, useState } from "react";
import axios from "axios";
import { createPostNormalization } from "./createPostNoramalization.js";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../routes/ROUTES.JS";
import MyToast from "../../messages/MyToast";
import nextId from "react-id-generator";
import { useSelector } from "react-redux";

const steps = ["Game details", "Review your post"];

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

const CreatePostPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userDetails, setUserDetails] = useState(null);
  const [gameDetails, setGameDetails] = useState(null);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const navigate = useNavigate();

  const handleNext = async (gameDetailsValues) => {
    try {
      const { data: myUser } = await axios.get(`users/${userData._id}`);
      setUserDetails(myUser);
      setGameDetails(gameDetailsValues);
      setActiveStep(activeStep + 1);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const request = createPostNormalization(gameDetails, userDetails);
      await axios.post("/posts", request);
      MyToast.info("Post Created!");
      navigate(ROUTE.HOME);
    } catch (err) {
      MyToast.error("Something wrong, Please try again later");
    }
  };

  return (
    <Fragment>
      <Box maxWidth="sm" sx={{ pb: 8, pt: 8 }}>
        <Paper
          variant="outlined"
          sx={{ py: { xs: 3, pd: 6 }, p: { xs: 2, pd: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            New Post
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={nextId()}>
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
      </Box>
    </Fragment>
  );
};
export default CreatePostPage;
