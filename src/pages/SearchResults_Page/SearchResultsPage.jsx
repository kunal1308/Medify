import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import { getMedicalCenters } from "../../services/api";
import FreqQues from "../../components/FreqQues/FreqQues";
import Footer from "../../components/Footer/Footer";
import styles from "./SearchResults.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import tickIcon from "../../images/verified.1f87346e730e 1.png";
import MedicalCentreCard from "../../components/MedicalCenterCard/MedicalCentreCard";
import FreeAppointment from '../../images/sensodyne_dweb.png.png';

const SearchResultsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get("state");
  const city = params.get("city");

  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      const fetchedCenters = await getMedicalCenters(state, city);
      setCenters(fetchedCenters);
    };
    fetchCenters();
  }, [state, city]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.navbar}>
      <NavBar />
      </div>
      <div className={styles.navbarBottom}></div>
      <div className={styles.searchbar}>
        <Searchbar />
      </div>

      <div className={styles.container}>
        <h4 style={{ marginBottom: "0.5em" }}>
          {centers.length} medical centers available in {state}
        </h4>
        <span className={styles.headline} style={{ display: "flex", alignItems: "center" }}>
          <img src={tickIcon} alt="img" />
          <p style={{ marginLeft: "1em", color: "#787887" }}>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </span>
        <div className={styles.wrapper}>
          <div className={styles.cardContainer}>
            {centers.map((center) => (
              <MedicalCentreCard center={center} />
            ))}
          </div>
          <div className={styles.freeAppointment}>
            <img src={FreeAppointment} alt="img" />
          </div>
        </div>
      </div>

      <div className={styles.freqQuestions}>
        <FreqQues />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default SearchResultsPage;
