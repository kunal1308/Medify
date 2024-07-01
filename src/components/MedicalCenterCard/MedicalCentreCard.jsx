import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Collapse,
} from "@mui/material";
import styles from "./MedicalCenterCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import {
  generateRandomSlots,
  categorizeSlots,
  generateDates,
} from "../../utility/Facility";
import HospitalCard from "../HospitalCard/HospitalCard";

SwiperCore.use([Navigation, Pagination]);

const MedicalCentreCard = ({ center }) => {
  const dates = useMemo(() => generateDates(), []);
  const [expanded, setExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState({});
  // eslint-disable-next-line
  const [activeIndex, setActiveIndex] = useState(
    dates.findIndex((date) => date === selectedDate)
  );

  const handleBooking = (center, bookingDate, bookingTime) => {
    const bookingDetails = {
      ...center,
      bookingDate,
      bookingTime,
    };
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(bookings));
  };
  const handleExpandClick = () => {
    setExpanded(true);
    if (!expanded) {
      const generatedDates = generateDates();
      const generatedSlots = {};

      generatedDates.forEach((date) => {
        const randomSlots = generateRandomSlots();
        console.log(randomSlots);
        generatedSlots[date] = categorizeSlots(randomSlots);
      });
      setSlots(generatedSlots);
    } else if (expanded && (!selectedDate || !selectedSlot)) {
      alert("Please select your date and slot");
    } else if (expanded && selectedDate && selectedSlot) {
      const bookingDate = new Date(selectedDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      alert(
        `Booked at ${center["Hospital Name"]} on ${bookingDate} at ${selectedSlot}`
      );
      handleBooking(center, bookingDate, selectedSlot);
      setExpanded(false);
      setSelectedSlot("");
    }
  };
  const handleToggleButton = () => {
    setExpanded(false);
  };
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setActiveIndex(newIndex);
    handleDateChange(dates[newIndex]);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot("");
  };
  const handleTimeChange = (time) => {
    setSelectedSlot((prevTime) => (prevTime === time ? "" : time));
  };

  return (
    <Card elevation={3} className={styles.card} key={center["Provider ID"]}>
      <CardContent className={styles.cardWrapper}>
        <HospitalCard center={center} />
        <CardContent className={styles.rightPart}>
          <Typography className={styles.cardContent1}>
            Available Today
          </Typography>
          <Button
            className={styles.bookBtn}
            variant="contained"
            onClick={handleExpandClick}
          >
            Book FREE Center Visit
          </Button>
        </CardContent>
      </CardContent>
      <CardContent key={center.id} style={{ position: "relative" }}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <button
            className={styles.toggleBtn}
            onClick={handleToggleButton}
          ></button>

          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation
            //   pagination={{clickable:false}}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {dates.map((date) => (
              <SwiperSlide key={date} className={styles.swiperSlide}>
                <Box
                  p={2}
                  style={{
                    borderBottom:
                      date === selectedDate ? "2px solid #2aa8ff" : "none",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  onClick={() => handleDateChange(date)}
                >
                  <Typography className={styles.slotDate}>{new Date(date).toDateString()}</Typography>
                  <Typography className={styles.totalSlots}>
                    <span style={{ color: "rgba(1, 164, 0, 1)" }}>
                      {slots[date]?.morning.length +
                        slots[date]?.afternoon.length +
                        slots[date]?.evening.length}{" "}
                      available slots
                    </span>
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography className={styles.timePeriod}>Morning</Typography>
              <Box p={0.5} paddingRight={0} sx={{ display: "flex", flexWrap: "wrap" }}>
                {slots[selectedDate] &&
                  slots[selectedDate].morning.map((slot, index) => (
                    <button
                      className={
                        selectedSlot === slot
                          ? styles.selectedTimeSlot
                          : styles.timeSlot
                      }
                      onClick={() => handleTimeChange(slot)}
                    >
                       <span className={styles.slot}>{slot}</span>
                    </button>
                  ))}
              </Box>
            </Box>

            <Box  sx={{ display: "flex", alignItems: "center" }}>
              <Typography className={styles.timePeriod}>Afternoon</Typography>
              <Box p={0.5} paddingRight={0} sx={{ display: "flex", flexWrap: "wrap" }}>
                {slots[selectedDate] &&
                  slots[selectedDate].afternoon.map((slot, index) => (
                    <button
                      className={
                        selectedSlot === slot
                          ? styles.selectedTimeSlot
                          : styles.timeSlot
                      }
                      onClick={() => handleTimeChange(slot)}
                    >
                      <span  className={styles.slot}>{slot}</span>
                    </button>
                  ))}
              </Box>
            </Box>

            <Box  sx={{ display: "flex", alignItems: "center" }}>
              <Typography className={styles.timePeriod}>Evening</Typography>
              <Box p={0.5} paddingRight={0} sx={{ display: "flex", flexWrap: "wrap" }}>
                {slots[selectedDate] &&
                  slots[selectedDate].evening.map((slot, index) => (
                    <button
                      className={
                        selectedSlot === slot
                          ? styles.selectedTimeSlot
                          : styles.timeSlot
                      }
                      onClick={() => handleTimeChange(slot)}
                    >
                      <span  className={styles.slot}>{slot}</span>
                    </button>
                  ))}
              </Box>
            </Box>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default MedicalCentreCard;
