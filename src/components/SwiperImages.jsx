import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../style/swiperImages.css";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

const SwiperImages = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/img/swiper/imageHomeSwiper1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/swiper/imageHomeSwiper5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/swiper/imageHomeSwiper7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/swiper/imageHomeSwiper4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/swiper/imageHomeSwiper3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/swiper/imageHomeSwiper2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/swiper/imageHomeSwiper6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperImages;
