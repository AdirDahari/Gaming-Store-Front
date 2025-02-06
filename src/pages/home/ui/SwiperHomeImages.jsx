import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../style/swiperHomeImages.css";
const baseUrl = import.meta.env.BASE_URL;

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

const SwiperHomeImages = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      {[
        "imageHomeSwiper1.jpg",
        "imageHomeSwiper5.jpg",
        "imageHomeSwiper7.jpg",
        "imageHomeSwiper4.jpg",
        "imageHomeSwiper3.jpg",
        "imageHomeSwiper2.jpg",
        "imageHomeSwiper6.jpg",
      ].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={`${baseUrl}/assets/img/swiper/${img}`}
            alt={`Game ${index + 1}`}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHomeImages;
