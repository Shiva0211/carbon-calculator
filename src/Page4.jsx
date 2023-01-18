import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Page4 = () => {
    const steps = ['Utility','Waste','Food','Spendings','Commute','Travels'];
    const [currentStep, setCurrentStep] = useState(3 );
    const [complete, setComplete] = useState(false);
    return (
      <>
    <div>      
  <nav class="navbar bg-body-tertiary">   
  <div class="container">
  <a class="navbar-brand" href="/#">            
  <img src="https://mycarbonfootprint.spgroup.com.sg/static/media/spgroup-logo.62d274f3.svg" alt="Bootstrap" width="180" height="100"/>
  </a><br></br>
  <div class="position-absolute top-50 start-50 translate-middle text-xl">What is my carbon footprint ?</div>
  </div>
  </nav></div>
  
  <div className="flex justify-between">
          {
          steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
          </div>
          <div><center><h3>Food</h3></center></div>
<div><center><h5 style={{color:"#7f7f7f"}}>Food production requires fuel that emits carbon dioxide into the environment.</h5></center></div><br></br>
<div><center><h5>Which foods make up part of your diet?</h5></center></div>
<br></br><br></br><br></br><br></br>

</>);};
export default Page4;