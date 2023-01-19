import React from "react";
import "./App.css";
import Home from "./components/Home";
import Results from "./components/Results";
import StepperComponent from "./components/StepperComponent";
function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Utility":
      component = <StepperComponent />;
      break;
    case "/Results":
      component = <Results />;
      break;
    default:
      component = <Home />;
      break;
  }
  return <>{component}</>;
}

export default App;
