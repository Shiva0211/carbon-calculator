import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
const Results = () => {
  return (
    <>
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
      <br></br>
      <center>
        {" "}
        <h1>
          203 Kg CO<sub>2</sub>/month
        </h1>
      </center>
      <br></br>
      <center>
        <h3>10 rain trees are needed to absorb your emissions monthly.</h3>
      </center>
    </>
  );
};
export default Results;
