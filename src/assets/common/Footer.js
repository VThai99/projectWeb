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
    console.log("aa");
    history.push("/contact-us");
  };
  return (
    <div>
      <footer>
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
                <li onClick={contact}>liên hệ chúng tôi</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
