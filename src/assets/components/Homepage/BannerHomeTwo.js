/** @format */

import React from "react";
import { Button, Image } from "react-bootstrap";
import Banner from "../../Images/Banner3.jpeg";
import Banner3 from "../../Images/Banner5.jpeg";
export default function BannerHomeTwo() {
  return (
    <div>
      <div className="container_big">
        <h3 className="font-30 text-gr600 text-start ml-2 my-5">
          O Sách giảm giá
        </h3>
        <div className="row">
          <div className="col-4">
            <div className="ml-1 image_h700 relative">
              <Image src={Banner} alt="banner" />
              <div className="banner_text_left">
                <div className="caption_text_1">
                  <h3 className="font-md-42 font-22">Sách hay mỗi ngày</h3>
                  <p className="text-g600">Mua đi còn chần trừ gì nữa!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={Banner3} alt="banner" className="relative" />
              <div className="banner_text_center">
                <div className="text-center">
                  <h4 className="font-22 text-white">Giảm giá Up to 59%</h4>
                  <h3 className="font-md-60 font-22 text-white uppercase">
                    BIG SALE **
                  </h3>
                  <p className="font-18 text-white">
                    Mua ngay những quyển sách giá trị cho mình và bạn bè!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={Banner} alt="banner" />
              <div className="banner_text_left">
                <div className="caption_text_1">
                  <h3 className="font-md-42 font-22">Ngày hội sách </h3>
                  <p className="text-g600">Số lượng có hạn!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
