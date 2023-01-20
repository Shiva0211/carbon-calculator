import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Stepper } from 'react-form-stepper';
import { Button } from "react-bootstrap";
import Utility from "../components/Utility";
import Waste from "../components/Waste";
import Food from "../components/Food";
import Footer from "../components/Footer";
import CalculatorService from '../services/calculator';

const Home = () => {
  const steps=[{ label: 'Utility', content: <Utility /> }, { label: 'Waste', content: <Waste /> }, { label: 'Food', content: <Food /> }];
  
  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const onNext = () => {
    if(currentStep < steps.length) {
      setCurrentStep(currentStep+1);
    }
  }

  const onSubmit = async () => {
    await CalculatorService.calculateCarbonFootprint({});
  }

  return (
    <>
  <div>      
<nav class="navbar bg-body-tertiary">   
<div class="container">
<a class="navbar-brand" href="/#">            
<img src="https://mycarbonfootprint.spgroup.com.sg/static/media/spgroup-logo.62d274f3.svg" alt="Bootstrap" width="180" height="100"/>
</a><br></br>
<div class="position-absolute top-50 start-50 translate-middle"><h2>What is my carbon footprint ?</h2></div>
</div></nav></div>

<div className="flex justify-between flex-col  mx-20">
<Stepper
className="w-full"
  steps={steps}
  activeStep={currentStep}
/>
<div className="border rounded">
{steps[currentStep].content}
</div>
<Button className="w-16 mt-8" onClick={onNext}>Next</Button>
<Button className="w-16 mt-8" onClick={onSubmit}>Submit</Button>
</div>
<Footer/>
    </>
  );
};

export default Home;