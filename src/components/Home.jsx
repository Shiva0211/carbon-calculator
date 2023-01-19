import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
const Home=()=>{
        return(<React.Fragment><nav class="navbar bg-body-tertiary">
        <div class="container">
          <h1>
          <a class="navbar-brand" href="/#">
            <img src="https://mycarbonfootprint.spgroup.com.sg/static/media/spgroup-logo.62d274f3.svg" alt="Bootstrap" width="180" height="100"/>
          </a>
          </h1>
        </div>
      </nav>

      <div class="text-center text-xl"><b>Track your carbon footprint:</b></div><br></br>
      <div>
      <p className="text-center">An average Singaporean emits around <b style={{color:"#FF6700"}}>730</b> kg of CO2 each month. This means that each person would require <br></br>around <b style={{color:"#FF6700"}}>36</b> rain trees to absorb their carbon emissions!
      </p></div><br></br>
      <div><p className="text-center">Before calculating your footprint, take a quick guess !</p></div>
      <br></br>
      <div><p className="text-center"><b>How many rain trees do you think it takes to absorb your carbon emissions every month ?</b></p></div>
      <br></br>

      <center><form>
     <div class="align-items-center">
     <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword" placeholder="Enter here (optional)"/><br></br><br></br>
      <a href="/Utility">Get started</a>
    </div>
  </div></form><br></br>
  <div>
    <a href="https://mycarbonfootprint.spgroup.com.sg/" style={{color:"#FF6700"}}>Download the SP app to keep track of your O<sub>2</sub> </a>
  </div>
  </center>  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <h1 className="text-2xl">&emsp;&emsp;&emsp;&ensp;What is climate change ?</h1><br></br>

  &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Climate change refers to big changes in global weather patterns that continued over a long period of time.
  <p className="text-justify">&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Over the past 100 years, global temperatures have been increasing faster than ever before. 
    Increased human <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;activities have led to higher amounts of carbon dioxide in the air. 
    Carbon dioxide traps heat and makes the <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Earth warmer. 
    Rain patterns are changing, sea levels are rising. Year after year, snow and ice are melting at a <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;faster rate. 
    Climate conditions will be intensified if we do not do something about it.</p>
    <br></br><br></br><br></br><br></br>


    <h1 className="text-2xl">&emsp;&emsp;&emsp;&ensp;How does my carbon footprint affect Singapore?</h1>
    <br></br><br></br>

    <h1 className="text-xl">&emsp;&emsp;&emsp;&emsp;Rising temperatures</h1><br></br>

    <p className="text-l">&emsp;&emsp;&emsp;&emsp;&emsp;The average daily temperatures could reach a high of 35 to 37 degrees Celsius in Singapore by 2100.</p>
    <br></br><br></br>

    <h1 className="text-xl">&emsp;&emsp;&emsp;&emsp;Rising sea levels</h1><br></br>

    <p className="text-l">&emsp;&emsp;&emsp;&emsp;&emsp;As a low-lying island, Singapore’s sea level is estimated to rise by half to one metre by 2100.</p>
    <br></br><br></br>

    <h1 className="text-xl">&emsp;&emsp;&emsp;&emsp;Extreme weather patterns:</h1><br></br> 

    <p className="text-l">&emsp;&emsp;&emsp;&emsp;&emsp;Singapore will likely experience frequent dry spells during drier months and flash floods due to more<br></br>&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; intense and frequent heavy rainfall during the wet months.</p>
</React.Fragment>);
    }

export default Home;