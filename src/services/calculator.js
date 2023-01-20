import api from "./config"

/*
params: 

{
  utility: {
    knowConsumption: true,
    electricity: 2000,
    water: 1000
  },
  food: {}
}
*/
const calculateCarbonFootprint = (params) => {
  // some mock api call here
  api.post('employees/page/1', params);
}

export default {calculateCarbonFootprint}