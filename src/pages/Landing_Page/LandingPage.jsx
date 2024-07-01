import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from './LandingPage.module.css'
import doctorImg from '../../images/NicePng_doctor-png_336282 1.png';
import {
  caringThoughts,
  facilities,
  newsContent,
  ourFamilies,
  specialist,
  specialities,
  offers
} from "../../utility/Facility";
import SwiperComponent from "../../components/Swiper/Swiper";
import patientCaring from "../../images/Group 1000011062.png";
import NewsCard from "../../components/NewsCard/NewsCard";
import FamilyCard from "../../components/FamilyCard/FamilyCard";
import FreqQues from "../../components/FreqQues/FreqQues";
import Footer from "../../components/Footer/Footer";
import Searchbar from "../../components/Searchbar/Searchbar";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.skipPara}>
              Skip the travel! Find Online
            </p>
            <h1>
              Medical{" "}
              <span style={{ color: "#2AA8FF", marginTop: "0em" }}>
                Centers
              </span>
            </h1>
            <p className={styles.connectPara}>
              Connect instantly with a 24x7 speacialist or choose to video visit
              a particular doctor
            </p>
            <button className={styles.findCenters}>Find Centers</button>
          </div>
          <img src={doctorImg} alt="img" className={styles.doctorImg} />
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <Searchbar />
          </div>
          <p className={styles.facilitiesHead}>You may be looking for</p>
          <div className={styles.facilities}>
            {facilities.map((facility) => (
              <div className={styles.facility}>
                <img src={facility.src} alt="img" />
                <span>{facility.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.offers}>
          <SwiperComponent images={offers} alt="img" />
        </div>
        <div className={styles.specialisation}>
          <h2>Find By Specialisation</h2>
          <div className={styles.specialities}>
            {specialities.map((speciality) => (
              <div className={styles.speciality}>
                <img src={speciality.src} alt="img" />
                <span>{speciality.name}</span>
              </div>
            ))}
          </div>
          <button className={styles.specialityBtn}>View All</button>
        </div>
        <div className={styles.specialistContainer}>
          <h2>Our Medical Specialist</h2>
          <div className={styles.specialist}>
            <SwiperComponent images={specialist} alt="img" />
          </div>
        </div>
        <div className={styles.caringWrapper}>
          <img src={patientCaring} alt="img" />
          <div className={styles.caringContent}>
            <p style={{ color: "#2AA8FF" }}>
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </p>
            <span className={styles.caringContentHeading}>
              Patient<span style={{ color: "#2AA8FF" }}>Caring</span>
            </span>
            <p>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you allow us to care for you and
              strive to be the first and best choice for healthcare.
            </p>
            {caringThoughts.map((thought) => (
              <span className={styles.thought}>
                <img src={thought.src} alt="img" />
                <p>{thought.name}</p>
              </span>
            ))}
          </div>
        </div>
        <div className={styles.news}>
          <p style={{ color: "#2AA8FF", paddingTop: "1em" }}>Blog & News</p>
          <h1 style={{ marginTop: "0em" }}>Read Our Latest News</h1>
          <div className={styles.newsWrapper}>
            {newsContent.map((content) => (
              <NewsCard blog={content} />
            ))}
          </div>
        </div>
        <div className={styles.ourFamily}>
          <div className={styles.familyContent}>
            <p style={{ color: "#2AA8FF" }}>
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </p>
            <h1>Our Families</h1>
            <p>
              We will work with you to develop indivisualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </div>
          <div className={styles.familyCard}>
            {ourFamilies.map((family) => (
              <FamilyCard data={family} />
            ))}
          </div>
        </div>
        <div className={styles.freqQuestions}>
          <FreqQues />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
