import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

export interface ISwiperProps {}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

const Swiper: FC<ISwiperProps> = () => {
  return (
    <Slider {...settings}>
      <Card price={139} imgUrl="/img/salated.png" positionName="Салат Цезар"/>
      <Card price={139} imgUrl="/img/salated.png" positionName="Салат Цезар"/>
      <Card price={139} imgUrl="/img/salated.png" positionName="Салат Цезар"/>
      <Card price={139} imgUrl="/img/salated.png" positionName="Салат Цезар"/>
    </Slider>
  );
};

export default Swiper;
