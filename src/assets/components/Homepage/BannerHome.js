/** @format */

import React from "react";
import { Button, Image } from "react-bootstrap";
import Banner from "../../Images/banner_main.png";
export default function BannerHome() {
  return (
    <div>
      <div className="image_h700 relative">
        <Image src={Banner} alt="banner" />
        <div className="banner_text">
          <div className="caption_text">
            <h4 className="text-y600 uppercase font-16">
              NƠI THẬP HỢP ĐỦ CÁC THỂ LOẠI SÁCH
            </h4>
            <h3 className="font-lg-60 font-25 font-semibold  my-4">
              Best Book!
            </h3>
            <p>Đầy đủ thể loại cho cả nam và nữa!</p>
            <Button
              variant="r200"
              className="btn-square btw-154 font-11 font-semibold mt-2"
            >
              GO NOW
            </Button>
          </div>
          <div className="caption_text">
            <h4 className="font-22">
              Chính sách giảm giá vầ khuyến mãi hàng tuần !
            </h4>
            <h3 className="price font-lg-60 font-25 font-semibold ">
               Lên đến 1.000.000 đ
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
