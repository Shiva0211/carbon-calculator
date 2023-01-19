import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
//import { Stepper } from "react-form-stepper";
//import { Button } from "react-bootstrap";
//import Utility from "./components/Utility";
//import Page3 from "./Page3";
//import Waste from "./components/Waste";
//import Food from "./components/Food";
//import Footer from "./Footer";
//import "./stepper.css";
const Utility = () => {
  //const steps = [
  //{ label: "Page3", content: <Page3 /> },
  //{ label: "Waste", content: <Waste /> },
  //{ label: "Food", content: <Food /> },
  //];
  //const [currentStep, setCurrentStep] = useState(0);
  //const onNext = () => {
  //if (currentStep < steps.length) {
  //setCurrentStep(currentStep + 1);
  //}
  //};
  return (
    <>

      <div>
        <center>
          <h4>Utility consumption</h4>
        </center>
      </div>
      <br></br>
      <div>
        <center>
          <h5 style={{ color: "#7f7f7f" }}>
            (Electricity, water and gas usage generate carbon emissions.)
          </h5>
        </center>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div>
        <form className="row g-3 position-absolute top-30 start-50 translate-middle">
          <div className="col-auto">
            <label for="idbutton">
              Do you know your utility consumption ?{" "}
            </label>
          </div>
          <br></br>
          <br></br>


          <div> 
            <select
              className="form-select"
              aria-label="Default select example"
              id="selectbtn"
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <h6
              className="position-absolute bottom-30 end-40 "
              style={{ color: "#7f7f7f" }}
            >
              Result will be more accurate if you specify your consumption.
            </h6>
          </div>
          <br></br>
          <br></br>
          <div>
            <h6
              className="position-absolute bottom-30 end-40 "
              style={{ color: "red" }}
            >
              Required.
            </h6>
          </div>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <center>
            <h5 style={{ color: "#5A5A5A" }}>Do you know ?</h5>
            <br></br> Singapore generated about 52 million tonnes of greenhouse
            gases in 2018. The bulk of it comes <br></br> from the burning of
            fossil fuels to generate energy for industries, buildings,
            households, and transportation.
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
    </>
  );
};

export default Utility;
