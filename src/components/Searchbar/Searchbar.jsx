import React, { useState } from "react";
import { getStates, getCities } from "../../services/api";
import Dropdown from "../Dropdown/Dropdown";
import { Button } from "@mui/material";
import styles from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const fetchStates = async () => {
    if (states.length === 0) {
      const fetchedStates = await getStates();
      setStates(fetchedStates);
      // console.log(fetchedStates);
    }
  };
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  const fetchCities = async () => {
    if (selectedState) {
      const fetchedCities = await getCities(selectedState);
      setCities(fetchedCities);
    }
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const searchCenters = () => {
    if(!selectedState && !selectedCity) {
      alert("Please select state and city")
    }
    else {
      navigate(`/data?state=${selectedState}&city=${selectedCity}`);
    }
  };

  return (
    <div className={styles.container}>
      <Dropdown
        label="State"
        options={states}
        value={selectedState}
        onChange={handleStateChange}
        onFocus={fetchStates}
      />
      <Dropdown
        label="City"
        options={cities}
        value={selectedCity}
        onChange={handleCityChange}
        onFocus={fetchCities}
      />
      <Button
        style={{ width: "30%", height: "3.25em" }}
        onClick={searchCenters}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </div>
  );
};

export default Searchbar;
