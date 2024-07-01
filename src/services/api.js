import axios from "axios";
import { config } from "../App";

export const getStates = async () => {
  try {
    const response = await axios.get(`${config.endpoint}/states`);
    return response.data;
  } catch (error) {
    console.log("Error fetching states");
    return [];
  }
};
export const getCities = async (state) => {
  try {
    const response = await axios.get(`${config.endpoint}/cities/${state}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching states");
    return [];
  }
};
export const getMedicalCenters = async (state, city) => {
  try {
    const response = await axios.get(
      `${config.endpoint}/data?state=${state}&city=${city}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching states");
    return [];
  }
};
