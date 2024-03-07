import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../../style/swiperPostImages.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const SwiperPostImages = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2P"
      >
        {images &&
          images.map((image) => (
            <SwiperSlide className="swiper-slideP" key={image.url}>
              <img src={image.url} alt={image.alt} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperP"
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image.url}>
              <img width="100%" height="100%" src={image.url} alt={image.alt} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

SwiperPostImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default SwiperPostImages;
