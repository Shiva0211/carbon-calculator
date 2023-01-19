import React from "react";
const Waste = () => {
  return (
    <React.Fragment>
      <div>
        <center>
          <h4>Waste</h4>
        </center>
      </div>
      <div>
        <center>
          <h5 style={{ color: "#7f7f7f" }}>
            Recycling reducing the emissions generated from incernation of
            household waste.
          </h5>
        </center>
      </div>
      <br></br>
      <br></br>

      <form>
        <center>
          <div class="dropdown">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              <h4>Do you recycle household waste ?</h4>
            </label>
            <select id="recycle" className="form-select"
              aria-label="Default select example"
              required>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </center>
      </form>
      <br></br>
      <div>
        <center>
          <h5 style={{ color: "#5A5A5A" }}>
            Do you know
            ?&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
          </h5>
          Singapore's one and only landfill is projected to reach capacity by
          2035.<br></br>
          <br></br>
        </center>
      </div>
    </React.Fragment>
  );
};
export default Waste;
