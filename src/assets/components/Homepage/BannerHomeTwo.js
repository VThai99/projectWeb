import React from "react";
import { Button, Image } from "react-bootstrap";
import Banner from "../../Images/banner2.jpg";
import Banner3 from "../../Images/banner3.jpg";
export default function BannerHomeTwo() {
  return (
    <div>
      <div className="container_big">
        <div className="row">
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={Banner} alt="banner" />
              <div className="banner_text_left">
                <div className="caption_text_1">
                  <h3 className="font-md-42 font-22">Mac Desktops</h3>
                  <p className="text-g600">Quality products!</p>
                  <Button
                    variant="b500"
                    className="btn-square btw-46 font-20 font-semibold mt-2"
                  >
                    &#10152;
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={Banner3} alt="banner" className="relative" />
              <div className="banner_text_center">
                <div className="text-center">
                  <h4 className="font-22 text-white">Up to 30%</h4>
                  <h3 className="font-md-60 font-22 text-white uppercase">
                    BIG SALE
                  </h3>
                  <p className="font-18 text-white">Get new smartphone!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={Banner} alt="banner" />
              <div className="banner_text_left">
                <div className="caption_text_1">
                  <h3 className="font-md-42 font-22">Computers</h3>
                  <p className="text-g600">Limited time offer!</p>
                  <Button
                    variant="b500"
                    className="btn-square btw-46 font-20 font-semibold mt-2"
                  >
                    &#10152;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
