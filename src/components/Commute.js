import React from "react";

const Commute = () => {
  return (
    <React.Fragment>
      <div>
        <center>
          <h4>Commute</h4>
        </center>
      </div>
      <center>
        <div>
          <h6 style={{ color: "#7f7f7f" }}>
            Fuel used during transportation generates carbon emissions.
            <br></br>
            <br></br>
            <b>
              What is your average daily time spent commuting on the following
              mode of transport?
            </b>
          </h6>
        </div>
      </center>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="MRT">
              <h6>MRT/LRT</h6>
            </label>
            <input
              type="number"
              id="MRT"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0"
              required
            />
          </div>
          <br></br>
          <div>
            <label for="Bus">
              <h6>Bus</h6>
            </label>
            <input
              type="number"
              id="Bus"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0"
              required
            />
          </div>
          <br></br>
          <div>
            <label for="Ride">
              <h6>Ride hailing services</h6>
            </label>
            <input
              type="number"
              id="Ride"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0"
              required
            />
            Taxi, Grab, Gojek, etc.
          </div>
          
          <br></br>
          <div>
            <label for="Motorcycle">
              <h6>Motorcycle</h6>
            </label>
            <input
              type="number"
              id="Motorcycle"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0"
              required
            />
          </div>
          <br></br>
          <div>
            <label for="Drive">
              <h6>Drive or ride as a passenger in a car</h6>
            </label>
            <input
              type="number"
              id="Drive"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0"
              required
            />
          </div>
        </div>
      </form>
      <div>
        <center>
          <h5 style={{ color: "#5A5A5A" }}>
            Do you know
            ?&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
          </h5>
          Singapore’s rail network is set to expand to about 360km by 2030.<br></br> 
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;This means that 8 in 10 households will soon live within 10 minutes walk of a train station.<br></br><br></br>
        </center>
      </div>
    </React.Fragment>
  );
};
export default Commute;
