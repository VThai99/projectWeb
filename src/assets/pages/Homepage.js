import React from "react";
import { Button, Image } from "react-bootstrap";
import BannerHome from "../components/Homepage/BannerHome";
import BannerHomeTwo from "../components/Homepage/BannerHomeTwo";
import BestSeller from "../components/Homepage/BestSeller";
import Banner from "../Images/banner_1.png";
import Banner6 from "../Images/banner6.jpg";
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
        <BestSeller />
      </div>
      <div className="banner_3">
        <div className="container_big">
          <div className="row">
            <div className="col-6">
              <div className="image_h700 relative">
                <Image src={Banner6} alt="banner" />
                <div className="banner_text_left">
                  <div className="caption_text_1 max-w-sm">
                    <h4 className="font-16 text-b500 uppercase">
                      GREAT HEADPHONES
                    </h4>
                    <h3 className="font-md-60 font-25 font-semibold  my-4">
                      Find your sound!
                    </h3>
                    <Button
                      variant="b500"
                      className="btn-square btw-154 font-11 font-semibold mt-2"
                    >
                      SHOP NOW
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="image_h700 relative">
                <Image src={Banner6} alt="banner" />
                <div className="banner_text_left">
                  <div className="caption_text_1 max-w-sm">
                    <h4 className="font-16 text-b500 uppercase">
                      BEST SMARTWATCH 2020
                    </h4>
                    <h3 className="font-md-60 font-25 font-semibold  my-4">
                      Smartwatch for you!
                    </h3>
                    <Button
                      variant="b500"
                      className="btn-square btw-154 font-11 font-semibold mt-2"
                    >
                      SHOP NOW
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
