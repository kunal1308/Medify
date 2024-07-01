import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./Swiper.module.css";

const SwiperComponent = ({ images }) => {
  const pagination = {
    clickable: true,
    renderBUllet: (index, className) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={images.length - 2}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <>
            <SwiperSlide key={index}>
              <img
                className={styles.img}
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
              />
              <p>{image.name}</p>
              <p>
                <span>{image.speciality}</span>
              </p>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
