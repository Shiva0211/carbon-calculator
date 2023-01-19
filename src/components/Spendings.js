import React from "react";
const Spendings = () => {
  return (
    <React.Fragment>
      <div>
        <center>
          <h4>Spendings</h4>
        </center>
      </div>
      <center>
        <div>
          <h6 style={{ color: "#7f7f7f" }}>
            Goods and services we spend on, use electricity and water that
            indirectly contribute to our emissions.
            <br></br>
            <br></br>
            <b>What is your average spending on the following in a month?</b>
          </h6>
        </div>
      </center>

      <label for="clothing">
        <h6>Clothing and footwear</h6>
      </label>
      <br></br>
      <select
        id="clothing"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>$0</option>
        <option value="<$30">{"<"}$30</option>
        <option value="$30-$100">$30-$100</option>
        <option value=">$100">{">"}$100</option>
      </select>
      <br></br>
      <label for="Recreation">
        <h6>Recreational and cultural activities</h6>
      </label>
      <br></br>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>$0</option>
        <option value="<$60">{"<"}$60</option>
        <option value="$60-$300">$60-$300</option>
        <option value=">$300">{">"}$300</option>
      </select>
      *Media subscriptions, gym memberships, movie and concert tickets
      <br></br><br></br>
      <label for="Furnishing">
        <h6>Furnishings, household equipment, household maintenance</h6>
      </label>
      <br></br>
      <select
        id="Furnishing"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>$0</option>
        <option value="<$100">{"<"}100</option>
        <option value="$100-$300">$100-$300</option>
        <option value=">$300">{">"}$300</option>
      </select>
      *Furniture, home appliances, maintenance, and repairs
      <br></br><br></br>
      <label for="Health">
        <h6>Health (incl. pharmaceuticals)</h6>
      </label>
      <br></br>
      <select
        id="Health"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>$0</option>
        <option value="<$50">{"<"}50</option>
        <option value="$50-$200">$50-$200</option>
        <option value=">$200">{">"}$200</option>
      </select>
      *Medication, medical appointments (including for pets)
      <br></br><br></br>
      <label for="Commmunication">
        <h6>Communication services</h6>
      </label>
      <br></br>
      <select
        id="Commmunication"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>$0</option>
        <option value="<$40">{"<"}40</option>
        <option value="$40-$200">$40-$200</option>
        <option value=">$200">{">"}$200</option>
      </select>
      *Mobile phone, internet services, and postage
      <br></br><br></br>
      <label for="Educational">
        <h6>Educational services</h6>
      </label>
      <br></br>
      <select
        id="Educational"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>$0</option>
        <option value="<$100">{"<"}100</option>
        <option value="$100-$200">$100-$200</option>
        <option value=">$200">{">"}$200</option>
      </select><br></br>
      <label for="Other">
        <h6>Other purchased goods and services</h6>
      </label>
      <br></br>
      <select
        id="Other"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>$0</option>
        <option value="<$120">{"<"}120</option>
        <option value="$120-$500">$120-$500</option>
        <option value=">$500">{">"}$500</option>
      </select>
      *Laundry, haircut, insurance, alcoholic beverages and tobacco<br></br><br></br>
      <div>
        <center>
          <h5 style={{ color: "#5A5A5A" }}>
            Do you know
            ?&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
          </h5>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;By using recycled paper, you can save up to 47% of the energy needed to produce a new one.<br></br><br></br>
        </center>
      </div>
    </React.Fragment>
  );
};
export default Spendings;
