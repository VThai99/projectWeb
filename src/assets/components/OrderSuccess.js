import React, { useState } from "react";
import { Button, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import Banner from "../Images/banner2.jpg";
export default function OrderSuccess() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const productlist = () => {
    history.push("/catalog");
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
            Cảm ơn <span className="font-medium">anh Tùng</span> đã cho MobileX
            cơ hội được phục vụ. Trong 15 phút, nhân viên MobileX sẽ{" "}
            <span className="font-medium">
              gọi điện hoặc gửi tin nhắn xác nhận giao hàng
            </span>{" "}
            cho anh.
          </p>
          <div className="box-choose-content my-4">
            <p className="uppercase">đơn hàng : #905531</p>
            <p>
              - <span className="font-medium">Người nhận hàng : </span>
              Anh Tùng, 0965323888
            </p>
            <p>
              - <span className="font-medium">Giao đến : </span>
              số 5 ngõ 395, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Hà Nội (nhân
              viên sẽ gọi xác nhận trước khi giao).
            </p>
            <p>
              - <span className="font-medium">Tổng tiền : </span>
              <span className="text-r300 m-0"> 43.990.000₫</span>
            </p>
          </div>
        </div>
        <div className="box-cart-detail">
          <h4 className="font-14 uppercase mb-4">chọn hình thức thanh toán</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Button
                variant="b500"
                className="btn-square w-100 font-14 font-semibold"
              >
                Tiền mặt
              </Button>
            </div>
            <div>
              <Button
                variant="b500"
                className="btn-square w-100 font-14 font-semibold"
              >
                Thẻ ATM
              </Button>
            </div>
            <div>
              <Button
                variant="b500"
                className="btn-square w-100  font-14 font-semibold"
              >
                Thẻ ngân hàng
              </Button>
            </div>
            <div>
              <Button
                variant="b500"
                className="btn-square w-100 font-14 font-semibold"
              >
                Chuyển khoản
              </Button>
            </div>
          </div>
          <p
            className="font-14 text-blue-500 text-center mt-3"
            onClick={handleShow}
          >
            Hủy đơn hàng
          </p>
        </div>
        <div className="box-cart-detail">
          <h4 className="font-14 uppercase mb-4">thời gian nhận hàng</h4>
          <div className="box-choose-content">
            <p className="font-14">Giao trước 11h00 Hôm nay (17/11)</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 md:col-span-2">
                <div className="cart-image-product">
                  <Image src={Banner} alt="banner" />
                </div>
              </div>
              <div className="col-span-8 md:col-span-10">
                <h4 className="font-14 font-medium m-0">
                  Điện thoại Samsung Galaxy Z Flip3 5G 256GB
                </h4>
                <div className="font-14 grid grid-cols-2 gap-2 mt-2">
                  <p>
                    Màu: <span>Xanh Dương</span>{" "}
                  </p>
                  <p>
                    Số Lượng: <span>1</span>{" "}
                  </p>
                </div>
                <div className="font-14 grid grid-cols-2 gap-3">
                  <p>Tổng tiền:</p>
                  <p className="font-14 text-r300 m-0">26.990.000đ</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="submitorder"
            className="btn-square w-100 font-14 uppercase font-bold my-3"
            onClick={productlist}
          >
            Mua thêm sản phẩm khác
          </Button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-cancel-order"
        centered
      >
        <div className="font-14">
          <h4 className="font-16 uppercase mb-4">hủy đơn hàng</h4>
          <p>
            MobileX mong nhận được sự góp ý của chị để phục vụ được tốt hơn.
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`}>
                <Form.Check
                  inline
                  label="Đổi ý, không mua nữa"
                  name="group1"
                  type={type}
                  className="mb-2"
                  // id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Tìm thấy giá rẻ hơn ở chỗ khác"
                  name="group1"
                  type={type}
                  className="mb-2"
                  // id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Muốn thay đổi sản phẩm trong đơn hàng (màu sắc, số lượng,...)"
                  name="group1"
                  type={type}
                  className="mb-2"
                  // id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Lý do khác"
                  name="group1"
                  type={type}
                  className="mb-2"
                  // id={`inline-${type}-1`}
                />
              </div>
            ))}
          </Form>
          <FloatingLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Nhập lý do khác"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <Button
                variant="b500"
                className="btn-square w-100 font-14 font-semibold"
                onClick={handleClose}
              >
                Đóng
              </Button>
            </div>
            <div>
              <Button
                variant="b500"
                className="btn-square w-100 font-14 font-semibold"
                onClick={home}
              >
                Xác nhận
              </Button>
            </div>
          </div>

          <p className="italic m-1">Lưu ý</p>
          <p className="italic m-1">
            - Quà khuyến mãi có thể thay đổi theo thời điểm đặt hàng.
          </p>
          <p className="italic m-1">
            - Phiếu điểm sẽ được hoàn lại vào SĐT mua hàng (nếu có).
          </p>
        </div>
      </Modal>
    </div>
  );
}
