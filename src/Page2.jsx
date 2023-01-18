//import * as React from 'react';
//import Box from '@mui/material/Box';
//import Stepper from '@mui/material/Stepper';
//import Step from '@mui/material/Step';
//import StepLabel from '@mui/material/StepLabel';

//import Box from "@mui/material/Box";
//import Stepper from "@mui/material/Stepper";
//import Step from "@mui/material/Step";
//import StepLabel from "@mui/material/StepLabel";
//import React, { useState } from "react";
//import "./stepper.css";
//import { TiTick } from "react-icons/ti";
//const Stepper = () => {
  //const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
  //const [currentStep, setCurrentStep] = useState(1);
  //const [complete, setComplete] = useState(false);
  //return (
    //<>
      //<div className="flex justify-between" style={{}}>
        //{steps?.map((step, i) => (
          //<h3
            //key={i}
            //className={`step-item ${currentStep === i + 1 && "active"} ${
              //(i + 1 < currentStep || complete) && "complete"
            //} `}
          //>
            //<h3 className="step">
              //{i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            //</h3>
            //<h3 className="text-gray-500">{step}</h3>
          //</h3>
        //))}
      //</div>
      //{!complete && (
        //<button
          //className="btn"
          //onClick={() => {
            //currentStep === steps.length
              //? setComplete(true)
              //: setCurrentStep((prev) => prev + 1);
          //}}
        //>
          //{currentStep === steps.length ? "Finish" : "Next"}
        //</button>
      //)}
    //</>
  //);
//};
//
//export default Stepper;
//import React, { Component } from "react";
//import "./stepper.css";
//class Page2 extends Component {
  //steps=['Utility','Waste','Food','Spendings','Commute','Travels'];
  //render() {
    //return (
      //<React.Fragment>
        //<div className="flex justify-between">
//{
  //this.steps?.map((step,i)=>
  //(
    //<div key={i} className="step-item">
      //<div className="step">{i+1}</div>
      //<p className="text-gray-500">{step}</p></div>
  //)
  //)
//}
//        </div>
      //<div>
        //<nav class="navbar bg-body-tertiary">
          //<div class="container">
            //<a class="navbar-brand" href="/#">
              //<img
                //src="https://mycarbonfootprint.spgroup.com.sg/static/media/spgroup-logo.62d274f3.svg"
                //alt="Bootstrap"
                //width="180"
                //height="100"
              ///>
            //</a>
            //<center>
              //<h2 style={{ color: "#464646" }}>
                //<b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;What is my carbon footprint ?</b>
              //</h2>
            //</center>
          //</div>
        //</nav>
        //</div>
        //</React.Fragment>
//    //);
  //}
  //}
//export default Page2;
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = () => {
  const steps = ['Utility','Waste','Food','Spendings','Commute','Travels'];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
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

<div className="flex justify-between">
        {steps?.map((step, i) => (
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

<div><center><h3>Utility consumption</h3></center></div><br></br>
<div><center><h5 style={{color:"#7f7f7f"}}>(Electricity, water and gas usage generate carbon emissions.)</h5></center></div>
<br></br><br></br><br></br><br></br>

<div><form class="row g-3 position-absolute top-30 start-50 translate-middle">
  <div class="col-auto">
    <label for="idbutton">Do you know your utility consumption ? </label>
  </div><br></br><br></br><br></br>

  <div class="dropdown">
  <button class="btn btn-outline-info dropdown-toggle position-absolute start-50 translate-middle required" type="button" data-bs-toggle="dropdown" id="dbutton" aria-expanded="false">
    Select one
  </button><br></br>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/#">Yes</a></li>
    <li><a class="dropdown-item" href="/#">No</a></li>
  </ul>
</div>
<div><h6 class="position-absolute bottom-30 end-40 " style={{color:"#7f7f7f"}}>Result will be more accurate if you specify your consumption.</h6></div><br></br><br></br>
<div><h6 class="position-absolute bottom-30 end-40 " style={{color:"red"}}>Required.</h6></div> 

<div><center>{!complete && (
        <button
          className="btn btn-outline-info position-absolute"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>)}</center></div>
</form><br></br><br></br><br></br><br></br><br></br><br></br>

<div>
  <center>
  <h5 style={{color:"#5A5A5A"}}>Do you know ?</h5><br></br> Singapore generated about 52 million tonnes of greenhouse gases in 2018. 
  The bulk of it comes <br></br> from the burning of fossil fuels to generate energy for industries, buildings, households,
  and transportation.</center>
</div><br></br>

<div>
  <center><h5>Current carbon footprint: <p style={{color:"orange"}}>0 kg co<sub>2</sub></p></h5></center>
</div><br></br><br></br>

<div>
  <center>
    <h5 style={{color:"#545454"}}>
      @2023 SP Group. All rights reserved.
    </h5>
  </center>
</div>
</div><br></br>
    </>
  );
};

export default Stepper;