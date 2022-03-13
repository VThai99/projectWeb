/** @format */

import React from "react";
import { Button, Image } from "react-bootstrap";
import Slider from "react-slick";
import img1 from '../../Images/1588654894-784901682-banner-h-i-sach.jpg'
import img2 from '../../Images/banner_main.png'
import img3 from '../../Images/cropped-banner.jpg'
import img4 from '../../Images/dich-vu-ke-kiem-uy-tin.jpeg'
import img5 from '../../Images/mau-banner-quang-cao-khuyen-mai.jpg'
const content = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
];
export default function BannerHomeTwo() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {content.map((item, index) => (
        <div className="d-flex justify-content-center align-items-center">
          <img src={item.image} alt="" style={{height: '600px', width: '100vw', objectFit: 'cover'}}/>
        </div>
      ))}
    </Slider>
  );
}
