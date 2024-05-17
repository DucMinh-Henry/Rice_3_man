import React from "react";
import imgslide1 from "../../../public/img/slide1.png";
import imgslide2 from "../../../public/img/slide2.jpg";
import imgslide3 from "../../../public/img/slide3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../src/index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section className="banner h-[500px] page-container mb-10 overflow-hidden">
      <Swiper
        slidesPerView={"auto"}
        grabCursor={"true"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <BannerItem imgSrc={imgslide1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem imgSrc={imgslide2} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem imgSrc={imgslide3} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem imgSrc={imgslide1} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

function BannerItem({ imgSrc }) {
  return (
    <div className="w-full h-full">
      <img src={imgSrc} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

export default Banner;
