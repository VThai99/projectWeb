/** @format */

import React, { useState } from "react";
import { Button, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import Banner from "../Images/Banner1.jpeg";
export default function OrderSuccess() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const productlist = () => {
    history.push("/");
  };
  const home = () => {
    history.push("/");
  };
  return (
    <div className="cart-page">
      <div className="box-cart">
        <div className="box-choose-content">
          <h4 className="text-green-500 uppercase font-16 text-center mt-2">
            ĐẶT HÀNG THÀNH CÔNG
          </h4>
        </div>
        <div className="box-cart-detail font-14">
          <p>
            Cảm ơn <span className="font-medium">Chị Tùng</span> đã cho LoveBook
            cơ hội được phục vụ. Trong 15 phút, nhân viên LoveBook sẽ{" "}
            <span className="font-medium">
              gọi điện hoặc gửi tin nhắn xác nhận giao hàng
            </span>{" "}
            cho anh.
          </p>
          <div className="box-choose-content my-4">
            <p className="uppercase">đơn hàng : #905531</p>
            <p>
              - <span className="font-medium">Người nhận hàng : </span>
              Chị Tùng, 0122121212
            </p>
            <p>
              - <span className="font-medium">Giao đến : </span>
              số 5 ngõ 395, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Hà Nội (nhân
              viên sẽ gọi xác nhận trước khi giao).
            </p>
            <p>
              - <span className="font-medium">Tổng tiền : </span>
              <span className="text-r300 m-0"> 42.000₫</span>
            </p>
          </div>
        </div>
        <div className="box-cart-detail">
          <h4 className="font-14 uppercase mb-4">chọn hình thức thanh toán</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Button
                variant="y500"
                className="btn-square w-100 font-14 font-semibold"
              >
                Tiền mặt
              </Button>
            </div>
            <div>
              <Button
                disabled
                variant="y500"
                className="btn-square w-100 font-14 font-semibold"
              >
                Thẻ ATM
              </Button>
            </div>
            <div>
              <Button
                disabled
                variant="y500"
                className="btn-square w-100  font-14 font-semibold"
              >
                Thẻ ngân hàng
              </Button>
            </div>
            <div>
              <Button
                disabled
                variant="y500"
                className="btn-square w-100 font-14 font-semibold"
              >
                Chuyển khoản
              </Button>
            </div>
          </div>
          <p
            className="font-14 text-blue-500 text-center mt-3"
            onClick={home}
          >
            <Button
              variant="r600"
              className="btn-square w-100 font-14 font-semibold"
            >
              Hủy đơn hàng
            </Button>
          </p>
        </div>
        <div className="box-cart-detail">
          <h4 className="font-14 uppercase mb-4">thời gian nhận hàng</h4>
          <div className="box-choose-content pb-5">
            <p className="font-14">Giao trước 11h00 Hôm nay (03/06)</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 md:col-span-2">
                <div className="cart-image-product">
                  <Image src={Banner} alt="banner" />
                </div>
              </div>
              <div className="col-span-8 md:col-span-10">
                <h4 className="font-14 font-medium m-0">Sách ABC</h4>
                <div className="font-14 grid grid-cols-2 gap-2 mt-2">
                  <p>
                    Tác giả: <span>Kiều Phong</span>{" "}
                  </p>
                  <p>
                    Số Lượng: <span>1</span>{" "}
                  </p>
                </div>
                <div className="font-14 grid grid-cols-2 gap-3">
                  <p>Tổng tiền:</p>
                  <p className="font-14 text-r300 m-0">26.000đ</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="submitorder"
            className="btn-square w-100 font-14 uppercase font-bold my-3"
            onClick={productlist}
          >
            Trở về trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
}
