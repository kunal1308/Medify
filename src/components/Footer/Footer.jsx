import React, { useState } from "react";
import styles from "./Footer.module.css";
import appleStore from "../../images/apple_store.png.png";
import playStore from "../../images/google_play.png.png";
import icon1 from "../../images/Group 1000011059.png";
import vector from "../../images/Vector.png";
import mobile1 from "../../images/SeekPng 1.png";
import mobile1Inner from "../../images/image 2.png";
import mobile2 from "../../images/SeekPng 2.png";
import mobile2Inner from "../../images/Mask group.png";
import medifyIcon from "../../images/Group 6.png";
import {
  footerLinks1,
  footerLinks2,
  socialMediaLinks,
} from "../../utility/Facility";
import { Link } from "react-router-dom";

const Footer = () => {
  const [number, setNumber] = useState();
  return (
    <div className={styles.wrapper}>
      <div className={styles.downloadSection}>
        <div className={styles.mobiles}>
          <div className={styles.mobile2}>
            <img src={mobile2} alt="img" />
            <span className={styles.mobile2Inner}>
              <img src={mobile2Inner} alt="img" />
            </span>
          </div>
          <div className={styles.mobile1}>
            <img src={mobile1} alt="img" />
            <span className={styles.mobile1Inner}>
              <img src={mobile1Inner} alt="img" />
            </span>
          </div>
        </div>
        <div className={styles.downloadSectionContent}>
          <h1>
            Download the <span style={{ color: "#2AA8FF" }}>Medify</span> App
          </h1>
          <span className={styles.icon1}>
            <img src={icon1} alt="img" />
          </span>
          <span className={styles.icon2}>
            <img src={vector} alt="img" />
          </span>
          <div className={styles.downloadLink}>
            <p> Get the link to download the app</p>
            <span className={styles.input}>
              <span>+91</span>
              <input
                type="number"
                placeholder="Enter phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </span>
            <button>Send SMS</button>
          </div>
          <div className={styles.storeImg}>
            <img src={appleStore} alt="img" />
            <img src={playStore} alt="img" />
          </div>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinks1}>
              <div className={styles.footerLinks1Wrapper}>
                <span className={styles.homeImg}>
                  <img src={medifyIcon} alt="img" />
                  <Link to="/" className={styles.homeLink}>
                    Medify
                  </Link>
                </span>
              </div>
              <div className={styles.socialMediaIcons}>
                {socialMediaLinks.map((link) => (
                  <a href="www.google.com" target="_blank">
                    <img src={link} alt="img" />
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.footerLinks2}>
              {footerLinks1.map((link) => (
                <ul>
                  {">"} {link}
                </ul>
              ))}
            </div>
            <div className={styles.footerLinks3}>
              {footerLinks2.map((link) => (
                <ul>
                  {">"} {link}
                </ul>
              ))}
            </div>
            <div className={styles.footerLinks2}>
              {footerLinks1.map((link) => (
                <ul>
                  {">"} {link}
                </ul>
              ))}
            </div>
          </div>
          <div className={styles.copyright}>
            <p>Copyright 2023 Surya Nursing Home.com, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
