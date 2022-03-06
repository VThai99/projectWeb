/** @format */

import React from "react";
import { Button, Image } from "react-bootstrap";
import Apple from "../Images/apple.svg";
import Diner from "../Images/diners.svg";
import Jcb from "../Images/jcb.svg";
import Visa from "../Images/visa.svg";
import Bitcoin from "../Images/bitcoin.svg";
import { useHistory } from "react-router";
export default function Footer() {
  const history = useHistory();
  const privacy = () => {
    history.push("/privacy-policy");
  };
  const contact = () => {
    history.push("/contact-us");
  };
  return (
    <div>
      <footer>
        <div className="footer_newsletter_caption">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-4  items-center ">
            <div className="newsletter">
              <div className="font-22">
                Nhận tin tức mới nhất của chúng tôi và giảm giá đặc biệt
              </div>
              <p className="text">
                Bạn có thể hủy đăng ký bất cứ lúc nào. Với mục đích đó, vui lòng
                tìm thông tin liên hệ của chúng tôi trong thông báo pháp lý.
              </p>
            </div>
            <div className="btn-search flex">
              <input
                className="ipw-300 height-44 input-search w-100 mr-2 px-2"
                type="search"
              />
              <Button
                variant="r200"
                className="btn-square btw-65 font-14 font-semibold"
              >
                Go !
              </Button>
            </div>
          </div>
        </div>
        <div className="footer_main">
          <div class="footer-contact grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-4">
            <div>
              <h6 className="mb-3">Dịch vụ khách hàng</h6>
              <ul className="text-g200">
                <li>Thứ hai đến thứ 7</li>
                <li>8am - 9pm</li>
                <li>097 691 60 61</li>
                <li>quynh@gmail.com</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-3">Đảm bảo</h6>
              <ul className="text-g200">
                <li>Giao hàng trong vòng 7 ngày</li>

                <li>Thanh toán trực tiếp hoặc online</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-3">Thông tin của chúng tôi</h6>
              <ul className="text-g200">
                <li onClick={privacy}>Điều khoản và dịch vụ</li>

                <li>About Us</li>
                <li onClick={contact}>liên hệ chúng tôi</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
