import Doctor from "../images/Doctor.png";
import Labs from "../images/Drugstore.png";
import Hospitals from "../images/Hospital.png";
import MedicalStore from "../images/Capsule.png";
import Ambulamce from "../images/Ambulance.png";
import offer1 from "../images/image 1 (1).png";
import offer2 from "../images/image 1 (2).png";
import offer3 from "../images/image 1 (2).png";
import Dentistry from "../images/Drugstore.png";
import PrimaryCare from "../images/Stethoscope.png";
import Cardiology from "../images/Heart Rate.png";
import MriResonance from "../images/Heart Rate Monitor.png";
import BloodTest from "../images/Blood Sample.png";
import Piscologist from "../images/Immune.png";
import Laboratory from "../images/Drugstore.png";
import XRay from "../images/X-Ray.png";
import ahmad from "../images/div.med-stl-3-photo-inner (1).png";
import heena from "../images/div.med-stl-3-photo-inner (2).png";
import ankur from "../images/div.med-stl-3-photo-inner (3).png";
import tickIcon from "../images/Frame.png";
import img1 from "../images/demo4-postimg3-370x300.jpg.png";
import img2 from "../images/doctor2-80x80.jpg.png";
import patientsCount from "../images/span.elementor-icon.png";
import hospitalsCount from "../images/span.elementor-icon (1).png";
import laboratoryCount from "../images/span.elementor-icon (2).png";
import doctorsCount from "../images/span.elementor-icon (3).png";
import fbIcon from "../images/a.elementor-icon.png";
import xIcon from "../images/a.elementor-icon (1).png";
import youtubeIcon from "../images/a.elementor-icon (2).png";
import pinterestIcon from "../images/a.elementor-icon (3).png";

export const facilities = [
  { name: "Doctors", src: Doctor },
  { name: "Labs", src: Labs },
  { name: "Hospitals", src: Hospitals },
  { name: "Medical Store", src: MedicalStore },
  { name: "Ambulance", src: Ambulamce },
];

export const offers = [
  { src: offer2 },
  { src: offer1 },
  { src: offer3 },
  { src: offer1 },
  { src: offer2 },
];

export const specialities = [
  { name: "Dentistry", src: Dentistry },
  { name: "Primary Care", src: PrimaryCare },
  { name: "Cardiology", src: Cardiology },
  { name: "MRI Resonance", src: MriResonance },
  { name: "Blood Test", src: BloodTest },
  { name: "Piscologist", src: Piscologist },
  { name: "Laboratory", src: Laboratory },
  { name: "X_Ray", src: XRay },
];

export const specialist = [
  { name: "Dr.Ahmad Khan", src: ahmad, speciality: "Neurologist" },
  { name: "Dr.Heena Sachdeva", src: heena, speciality: "Orthopadics" },
  { name: "Dr.Ankur Sharma", src: ankur, speciality: "Medicine" },
  { name: "Dr.Ahmad Khan", src: ahmad, speciality: "Neurologist" },
  { name: "Dr.Heena Sachdeva", src: heena, speciality: "Orthopadics" },
];

export const caringThoughts = [
  { name: "Stay Updated About Your Health", src: tickIcon },
  { name: "Check Your Results Online", src: tickIcon },
  { name: "Book Your Appointments", src: tickIcon },
];

export const newsContent = [
  {
    category: "Medical",
    date: "March 31, 2022",
    para: "6 Tips To Protect Your Mental Health When You Are Sick",
    img1: img1,
    img2: img2,
    writer: "Rebecca Lee",
  },
  {
    category: "Medical",
    date: "March 31, 2022",
    para: "6 Tips To Protect Your Mental Health When You Are Sick",
    img1: img1,
    img2: img2,
    writer: "Rebecca Lee",
  },
  {
    category: "Medical",
    date: "March 31, 2022",
    para: "6 Tips To Protect Your Mental Health When You Are Sick",
    img1: img1,
    img2: img2,
    writer: "Rebecca Lee",
  },
];

export const ourFamilies = [
  {
    img1: patientsCount,
    count1: "5000+",
    name1: "Happy Patients",
    img2: hospitalsCount,
    count2: "200+",
    name2: "Hospitals",
  },
  {
    img1: laboratoryCount,
    count1: "1000+",
    name1: "Laboratories",
    img2: doctorsCount,
    count2: "700+",
    name2: "Expert Doctors",
  },
];

export const questions = [
  "Why choose our medical facility for your family?",
  "Why we are different from others?",
  "Trusted & experienced senior care & love",
  "Ho to take appointment for emergency cases?",
];

export const footerLinks1 = [
  "About Us",
  "Our Pricing",
  "Our Gallery",
  "Appointment",
  "Privacy Policy",
];
export const footerLinks2 = [
  "Orthology",
  "Neurology",
  "Dental Care",
  "Opthalmology",
  "Cardiology",
];
export const socialMediaLinks = [fbIcon, xIcon, youtubeIcon, pinterestIcon];

export const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    dates.push(date.toISOString().split("T")[0]);
  }
  return dates;
};

export const generateRandomSlots = () => {
  const slots = [];
  const numOfSlots = Math.floor(Math.random() * 10) + 10;
  for (let i = 0; i < numOfSlots; i++) {
    const hour = Math.floor(Math.random() * 12) + 9;
    const minute = Math.random() < 0.5 ? "00" : "30";
    const hour12hr = hour % 12 || 12;
    const period = hour < 12 ? "AM" : "PM";
    const formattedHour = hour12hr.toString().padStart(2, "0");
    const time = `${formattedHour}:${minute} ${period}`;

    if (!slots.includes(time)) {
      slots.push(time);
    }
  }
  return slots;
};

export const categorizeSlots = (slots) => {
  const morningSlots = [];
  const afternoonSlots = [];
  const eveningSlots = [];
  slots.forEach((slot) => {
    const [time, period] = slot.split(" ");
    // console.log(slot);
    const hour = time.split(":").map(Number);
    const hour24 = period === "PM" && hour !== 12 ? parseInt(hour) + 12 : parseInt(hour);
    console.log(hour24);
    if (hour24 >= 9 && hour24 < 12) {
      morningSlots.push(slot);
    } else if (hour24 >= 12 && hour24 < 16) {
      afternoonSlots.push(slot);
    } else if (hour24 >= 16 && hour24 <= 18) {
      eveningSlots.push(slot);
    }
  });
  const afternoonSortedSlots = sortSlots(afternoonSlots);
  const morningSortedSlots = sortSlots(morningSlots);
  const eveningSortedSlots = sortSlots(eveningSlots);
  // console.log({
  //   morning: mrngSortedSlots,
  //   afternoon: afternoonSortedSlots,
  //   evening: eveSortedSlots,
  // });

  return {
    morning: morningSortedSlots,
    afternoon: afternoonSortedSlots,
    evening: eveningSortedSlots,
  };
};

const timeStrToMinutes = (time) => {
  const [timePart, period] = time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }
  return hours * 60 + minutes;
};
const sortSlots = (slots) => {
  return slots.sort((a, b) => timeStrToMinutes(a) - timeStrToMinutes(b));
};
