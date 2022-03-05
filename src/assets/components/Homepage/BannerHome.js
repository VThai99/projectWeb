import React from "react";
import { Button, Image } from "react-bootstrap";
import Banner from "../../Images/banner_1.png";
export default function BannerHome() {
  return (
    <div>
      <div className="image_h700 relative">
        <Image src={Banner} alt="banner" />
        <div className="banner_text">
          <div className="caption_text">
            <h4 className="text-b500 uppercase font-16">
              CREATING A FEATURE NOW!
            </h4>
            <h3 className="font-lg-60 font-25 font-semibold  my-4">
              Best Laptops!
            </h3>
            <p>Our extensive collection of men’s and women’s!</p>
            <Button
              variant="b500"
              className="btn-square btw-154 font-11 font-semibold mt-2"
            >
              SHOP NOW
            </Button>
          </div>
          <div className="caption_text">
            <h4 className="font-22">Great deals every weekends!</h4>
            <h3 className="price font-lg-60 font-25 font-semibold ">
              From $699
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
