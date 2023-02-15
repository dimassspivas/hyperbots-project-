import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BigCard from "./BigCard";

export interface ITopSwiperProps {}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const TopSwiper: FC<ITopSwiperProps> = () => {
  return (
    <Slider {...settings}>
      <BigCard imgUrl="/img/burger_swiper.png" price={145} discount={0.25} positionName="чікенбургер"/>
      <BigCard imgUrl="/img/burger_swiper.png" price={100} discount={0.15} positionName="гамбургер"/>
      <BigCard imgUrl="/img/burger_swiper.png" price={200} discount={0.1} positionName="чізбургер"/>
      <BigCard imgUrl="/img/burger_swiper.png" price={130} discount={0.1} positionName="чікенбургер"/>
    </Slider>
  );
};

export default TopSwiper;
