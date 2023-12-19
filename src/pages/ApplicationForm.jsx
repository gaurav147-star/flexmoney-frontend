import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
} from "@mui/material";
import Form from "../components/Form";
import PaymentForm from "../components/PaymentForm";
import Navbar from "../components/Navbar";

const steps = ["Application Form", "Payment Form"];

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <Form/>;
    case 1:
      return <PaymentForm/>;
    default:
      return "Unknown stepIndex";
  }
};

const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  

  return (
    <>
    <Navbar/>
    <hr />
      <Container sx={{marginTop:'5%'}}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <div>{getStepContent(activeStep)}</div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep !== steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ApplicationForm;
