/** @format */

import React from "react";
import { Button, Image } from "react-bootstrap";
import BannerHome from "../components/Homepage/BannerHome";
import BannerHomeTwo from "../components/Homepage/BannerHomeTwo";
import Product from "../components/Homepage/Product";
import Banner from "../Images/banner_1.png";
import Banner6 from "../Images/Banner5.jpeg";
export default function Homepage() {
  return (
    <div className="homepage mb-5">
      <div className="banner_1">
        <BannerHome />
      </div>
      <div className="mt-5">
        <BannerHomeTwo />
      </div>

      <div className="mt-5">
        <Product />
      </div>
    </div>
  );
}
