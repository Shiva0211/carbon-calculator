import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = () => {
    const steps = ['Utility','Waste','Food','Spendings','Commute','Travels'];
    const [currentStep, setCurrentStep] = useState(2 );
    const [complete, setComplete] = useState(false);
    return (
      <>
    <div>      
  <nav class="navbar bg-body-tertiary">   
  <div class="container">
  <a class="navbar-brand" href="/#">            
  <img src="https://mycarbonfootprint.spgroup.com.sg/static/media/spgroup-logo.62d274f3.svg" alt="Bootstrap" width="180" height="100"/>
  </a><br></br>
  <div class="position-absolute top-50 start-50 translate-middle text-xxl">What is my carbon footprint ?</div>
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

<div><center><h3>Waste</h3></center></div>
<div><center><h5 style={{color:"#7f7f7f"}}>Recycling reducing the emissions generated from incernation of household waste.</h5></center></div>
<br></br><br></br><br></br><br></br>

<div><form class="row g-3 position-absolute top-50 start-50 translate-middle">
<center><div class="col-auto">
    <label for="idbutton">Do you know your utility consumption ? </label>
  </div></center>

  
  <center><div class="dropdown">
  <button class="btn btn-outline-info dropdown-toggle  position-absolute top-50 start-50 translate-middle two required" type="button" data-bs-toggle="dropdown" id="dbutton" aria-expanded="false">
  Select one
  </button><br></br>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/#">Yes</a></li>
    <li><a class="dropdown-item" href="/#">No</a></li>
  </ul>
</div></center><br></br><br></br><br></br>

<div><center><button class="btn btn-primary start-50 duration-300 ease-in-out">Previous</button></center></div>
<div><center>{!complete && (
        <button
          className="btn btn-outline-info start-50 two"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>)}</center></div>
</form>
  </div><br></br><br></br><br></br><br></br>

  <nav class="navbar bg-body-tertiary">   
  <div class="container">
  <a class="navbar-brand" href="/#">            
  <img src="https://mycarbonfootprint.spgroup.com.sg/static/media/industrialFactory.6954c606.svg" alt="Bootstrap" width="70" height="70"/>
  </a>
<div class="align-right">
        <h5 class="four">Do you know ?&emsp;&emsp;&emsp;</h5>
        <center>40% of trash placed into recycling bins is contaminated and is thus incinerated.</center>
</div>
<div class="position-absolute bottom-0 start-50 translate-middle-x">
  <h6>Current carbon footprint: <h6 style={{color:"orange"}}>82 kg co<sub>2</sub></h6></h6>
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<div class="position-absolute top-100 start-50 translate-middle">
  <center>
    <br></br><br></br><br></br><br></br>
    <h5 style={{color:"#545454"}}>
    &emsp;&emsp;
      @2023 SP Group. All rights reserved.
    </h5>
  </center>
</div>
 </div></nav>

  
  </>);};
  export default Stepper;