import React from "react";

const Food = () => {
  
  return (
    <React.Fragment>
      <div>
        <center>
          <h4>Food</h4>
        </center>
      </div>
      <div>
        <center>
          <h5 style={{ color: "#7f7f7f" }}>
          Food production requires fuel that emits carbon dioxide into the environment.
          </h5>
        </center>
      </div>
      <br></br>

<center><h5>Which foods make up part of your diet?</h5></center>
<select multiple id="countries" className="form-select"
              aria-label="Default select example"
              required>
  <option selected value="Beef">Beef</option>
  <option value="Eggs">Eggs</option>
  <option value="Pork">Pork</option>
  <option value="Vegetables">Vegetables</option>
  <option value="Chicken">Chicken and duck</option>
  <option value="Fruits">Fruits</option>
  <option value="Mutton">Mutton</option>
  <option value="Grain">Grain</option>
  <option value="Seafood">Seafood</option>
  <option value="Diary products">Diary products</option>
</select><br></br><br></br>
<div>
        <center>
          <h5 style={{ color: "#5A5A5A" }}>
            Do you know
            ?&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&ensp;          </h5><p>Food waste makes up half of the 1.5kg of waste discarded daily by Singaporean households.</p>
          <br></br><br></br>
        </center>
      </div>
</React.Fragment>
  );
}
export default Food;