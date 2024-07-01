import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Bookings.module.css";
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import FreeAppointment from "../../images/sensodyne_dweb.png.png";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
    setFilteredBookings(storedBookings);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
    setFilteredBookings(storedBookings);

    if (input.trim() === "") {
      setBookings(storedBookings);
      setFilteredBookings(storedBookings);
    }
  };
  const handleSearchBooking = () => {
    const filteredBookingsList = bookings.filter((booking) =>
      booking["Hospital Name"].toLowerCase().includes(input.toLowerCase())
    );
    setFilteredBookings(filteredBookingsList);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.navbarBottom}>
        <h2>My Bookings</h2>
      </div>
      <div className={styles.searchbar}>
        <input
          placeholder="Search By Hospital"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchBooking}>Search</button>
      </div>
      <div className={styles.container}>
        {filteredBookings.length === 0 ? (
          <p>No bookings made yet.</p>
        ) : (
          <div className={styles.bookingsContainer}>
            {filteredBookings.map((booking) => (
              <div className={styles.cardWrapper}>
                <div className={styles.leftPart}>
                  <HospitalCard center={booking} hideSpecificTypo={true} />
                </div>

                <div className={styles.rightPart}>
                  <div className={styles.bookingTime}>
                    {booking.bookingTime}
                  </div>
                  <div className={styles.bookingDate}>
                    {booking.bookingDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.freeAppointment}>
          <img src={FreeAppointment} alt="img" />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default BookingsPage;
