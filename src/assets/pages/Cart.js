import React, { useState } from "react";
import { Button, Form, Image, Tab, Tabs } from "react-bootstrap";
import { useHistory } from "react-router";
import Banner from "../Images/banner2.jpg";

export default function Cart() {
  const history = useHistory();
  const orderSuccess = () => {
    history.push("/ordersuccess");
  };
  const [count, setCount] = useState(1);

  return (
    <div className="cart-page">
      <div className="box-cart">
        <div className="px-4 py-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-2">
              <div className="cart-image-product">
                <Image src={Banner} alt="banner" />
              </div>
            </div>
            <div className="col-span-9 md:col-span-10">
              <div className="flex justify-between items-center">
                <h4 className="font-14 font-medium m-0">
                  Điện thoại Samsung Galaxy Z Flip3 5G 256GB
                </h4>
                <p className="font-14 text-r300 m-0">26.990.000đ</p>
              </div>
              <p className="font-12 text-blue-500">9 mã khuyến mại</p>
              <div className="discountpromotion">
                Giảm <span className="font-14 text-r300">1.000.000đ</span> còn{" "}
                <span className="font-14 text-r300">25.990.000đ</span>
              </div>
              <div className="flex justify-between my-3">
                <Form.Select size="sm">
                  <option>Màu Đen</option>
                  <option>Màu Trắng</option>
                  <option>Màu Vàng</option>
                  <option>Màu Hồng</option>
                </Form.Select>
                <div className="choosenumber">
                  <button
                    disabled={count <= 1 ? true : false}
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    <div className="btn-up-down ">&#8722;</div>
                  </button>
                  <input className="input-number" value={count} readOnly />
                  <button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <div className="btn-up-down">&#43;</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-14">Tạm tính (1 sản phẩm):</p>
            <p className="font-14 text-r300 p-0">26.990.000đ</p>
          </div>
        </div>
        <div className="box-cart-detail ">
          <div className="uppercase mb-2"> THÔNG TIN KHÁCH HÀNG</div>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Anh"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Chị"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <Form className="grid grid-rows-1 grid-flow-col gap-4">
            <Form.Group controlId="formBasicName">
              <Form.Control type="name" placeholder="Họ và tên" className="" />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                type="phone"
                placeholder="Số Điện Thoại"
                className=""
              />
            </Form.Group>
          </Form>
          <div className="tab-choose mt-4">
            <div className="uppercase mb-3"> CHỌN CÁCH THỨC NHẬN HÀNG</div>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Giao tận nơi">
                <div className="box-choose-content">
                  <Form className="grid grid-rows-2 grid-flow-col gap-4">
                    <Form.Group controlId="formBasicName">
                      <Form.Control
                        type="name"
                        placeholder="Thành Phố"
                        className=""
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                      <Form.Control
                        type=""
                        placeholder="Phường/Xã"
                        className=""
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Control
                        type="name"
                        placeholder="Quận/Huyện"
                        className=""
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                      <Form.Control
                        type=""
                        placeholder="Số nhà, tên đường"
                        className=""
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Nhận tại siêu thị">
                <div className="box-choose-content">
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          label="Cơ Sở: 19 Lê Văn Lương, Thanh Xuân, Hà Nội"
                          name="group1"
                          type={type}
                          // id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </Tab>
            </Tabs>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="name"
                placeholder="Yêu cầu khác ( Không bắt buộc )"
                className=" mt-4"
              />
            </Form.Group>
          </div>
          <div className="tab-choose mt-4">
            <div className="flex justify-between">
              <p className="font-16 font-semibold m-0">Tổng tiền:</p>
              <p className="font-14 text-r300 m-0">26.990.000đ</p>
            </div>
            <Button
              variant="submitorder"
              className="btn-square w-100 font-14 uppercase font-bold mt-3"
              onClick={orderSuccess}
            >
              Đặt hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
