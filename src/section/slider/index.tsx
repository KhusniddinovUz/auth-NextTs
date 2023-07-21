import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import swiperStyles from "@/section/slider/swiper.module.css";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "@/assets/slider-image-1.png";
import image2 from "@/assets/slider-image-2.png";
import image3 from "@/assets/slider-image-3.png";
import image4 from "@/assets/slider-image-4.png";
import image5 from "@/assets/slider-image-5.png";
import Typography from "@/components/typography";

interface SliderProps {
  title: string;
  subTitle: string;
}

const SliderSection = (props: SliderProps) => {
  return (
    <Swiper
      spaceBetween={300}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      slidesPerView={1}
      className={swiperStyles.mySwiper}
    >
      <SwiperSlide className={swiperStyles.mySlider}>
        <img
          className={swiperStyles.sliderImage}
          src={image1.src}
          alt="first"
        />
      </SwiperSlide>
      <SwiperSlide className={swiperStyles.mySlider}>
        <img
          className={swiperStyles.sliderImage}
          src={image2.src}
          alt="second"
        />
      </SwiperSlide>
      <SwiperSlide className={swiperStyles.mySlider}>
        <img
          className={swiperStyles.sliderImage}
          src={image3.src}
          alt="third"
        />
      </SwiperSlide>
      <SwiperSlide className={swiperStyles.mySlider}>
        <img
          className={swiperStyles.sliderImage}
          src={image4.src}
          alt="fourth"
        />
      </SwiperSlide>
      <SwiperSlide className={swiperStyles.mySlider}>
        <img
          className={swiperStyles.sliderImage}
          src={image5.src}
          alt="fifth"
        />
      </SwiperSlide>
      <div className={swiperStyles.slideText}>
        <Typography
          $textSize={"subTitle"}
          $textWeight={"w_700"}
          color={"white"}
          $align={"center"}
        >
          {props.title}
        </Typography>
        <Typography
          $textSize={"paragraph"}
          $textWeight={"w_600"}
          color={"white"}
          $align={"center"}
          $opacity={0.75}
        >
          {props.subTitle}
        </Typography>
      </div>
    </Swiper>
  );
};

export default SliderSection;
