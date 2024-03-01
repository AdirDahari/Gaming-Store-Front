// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../style/swiperImages.css";

// import required modules
import { Pagination } from "swiper/modules";

const SwiperImages = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/assets/img/swiper/ULdndeMDNiTeAQy8A3oeFX-1200-80.jpg"
            alt="swiper image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/img/swiper/u8rknqKRioPbqCPbmswpnZ-1200-80.jpg"
            alt="swiper image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/img/swiper/nintendo-switch-3953601_1280.jpg"
            alt="swiper image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/img/swiper/oj5BEgv9N4jQQLLwCQn3Jg-1200-80.jpg"
            alt="swiper image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperImages;
