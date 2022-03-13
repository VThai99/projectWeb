/** @format */

import React from "react";
import { Image } from "react-bootstrap";
import Banner from "../../Images/banner-201806.jpeg";
export default function BannerHome() {
  return (
    <div>
      <div className=" relative">
        <Image src={Banner} alt="banner" />
      </div>
    </div>
  );
}
