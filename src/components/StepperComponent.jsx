import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { Stepper } from 'react-form-stepper';
import Food from './Food';
//import { Button } from "react-bootstrap";
import Waste from './Waste';
import Footer from './Footer';
import Spendings from './Spendings';
import Commute from './Commute';
import Travels from './Travels';
import Utility from './Utility';
function StepperComponent() 
{
    const steps=[ {label:"Utility",content:<Utility/>},
    { label: "Waste", content: <Waste /> },{label:"Food",content:<Food/>},{label:"Spendings",content:<Spendings/>},
    { label: "Commute", content:<Commute/>},{ label: "Travels",content:<Travels/>}
  ];
    const [currentStep,setCurrentStep]=useState(0);
    const onNext = () => {
    if(currentStep < steps.length) {
      setCurrentStep(currentStep+1);
    }
  }
  const onPrev=()=>
  {
    if(currentStep>0)
  {
    setCurrentStep(currentStep-1);
  }
  }
    return <React.Fragment>
    <div className="flex justify-between flex-col  mx-20">
<Stepper
className="w-full"
  steps={steps}
  activeStep={currentStep}
/>
<div>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="/#">
              <img
                src="https://mycarbonfootprint.spgroup.com.sg/static/media/spgroup-logo.62d274f3.svg"
                alt="Bootstrap"
                width="180"
                height="100"
              />
            </a>
            <div className="position-absolute top-50 start-50 translate-middle">
              <h4>What is my carbon footprint ?</h4>
            </div>
          </div>
        </nav>
      </div>

<div className="border rounded">
{steps[currentStep].content}
</div>
<br></br>
<center><Button variant="contained" onClick={onNext}>Next</Button><br></br><br></br> 
<Button variant="contained" onClick={onPrev}>Previous</Button></center>
</div><br></br>
<div>
          <center>
            <h5>
              Current carbon footprint:{" "}
              <p style={{ color: "orange" }}>
                0 kg co<sub>2</sub>
              </p>
            </h5>
          </center>
        </div>
<Footer/></React.Fragment>;
  }
export default StepperComponent;