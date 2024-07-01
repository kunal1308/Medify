import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import medifyIcon from "../../images/Group 6.png";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.homeImg}>
        <img src={medifyIcon} alt="img" />
        <Link to="/" className={styles.homeLink}>
          Medify
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link to="/find-doctors" className={styles.navbarLink}>
          Find Doctors
        </Link>
        <Link to="/hospitals" className={styles.navbarLink}>
          Hospitals
        </Link>
        <Link to="/medicines" className={styles.navbarLink}>
          Medicines
        </Link>
        <Link to="/surgeries" className={styles.navbarLink}>
          Surgeries
        </Link>
        <Link to="/softwareForProvider" className={styles.navbarLink}>
          Software for Provider
        </Link>
        <Link to="/facilities" className={styles.navbarLink}>
          Facilities
        </Link>
        <Link to="/bookings" className={styles.buttonLink}>
          My Bookings
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
