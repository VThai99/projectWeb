/** @format */

import React, { useEffect, useState } from "react";
import { Button, Form, Image, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Banner from "../Images/Banner1.jpeg";

export default function Cart() {
  const product = useSelector((state) => state.Cart);
  const [totalMoney, setTotalMoney] = useState(0);
  const count = useSelector((state) => state.numberCart);
  const dispatch = useDispatch();
  const history = useHistory();
  const orderSuccess = () => {
    history.push("/ordersuccess");
  };
  useEffect(() => {
    const getTotal = () => {
      let total = 0;
      product.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalMoney(total);
    };
    localStorage.setItem("count", count);
    localStorage.setItem("cart", JSON.stringify(product));
    getTotal();
  }, [product, count]);
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };
  const formatMoney = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  const updateQuantity = async (e, id) => {
    if (e.target.value === "") {
      e.target.value = 0;
    }
    let quantity = e.target.value;
    if (quantity === "0") {
      removeItem(id);
    }
    dispatch({
      type: "UPDATEQUANTITY",
      id: id,
      updateQuantity: quantity,
    });
  };
  return (
    <div className="cart-page">
      <div className="box-cart">
        <div className="px-4 py-4">
          {product.map((item, index) => {
            return (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 md:col-span-2">
                  <div className="cart-image-product">
                    <Image src={Banner} alt="banner" />
                  </div>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <div className="flex justify-between items-center">
                    <h4 className="font-14 font-medium m-0">{item.name}</h4>
                    <p className="font-14 text-r300 m-0">
                      Giá: {formatMoney(item.price)}đ{" "}
                      <Button
                        color="danger"
                        variant="contained"
                        onClick={() => removeItem(item.id)}
                      >
                        X
                      </Button>
                    </p>
                  </div>
                  <div className="flex justify-between my-3">
                    <div className="choosenumber">
                      <span className="font-14 text-r300 p-0">Số lượng:</span>
                      <input
                        type="number"
                        className="form-control w-50 ml-3 font-weight-bold  font-italic"
                        min="0"
                        defaultValue={item.quantity}
                        onChange={(e) => {
                          updateQuantity(e, item.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between mt-5">
            <p className="font-14">Tạm tính ({count} sản phẩm):</p>
            <p className="font-14 text-r300 p-0">{formatMoney(totalMoney)}đ</p>
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
              <Tab eventKey="profile" title="Nhận tại cửa hàng">
                <div className="box-choose-content">
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          label="Địa chỉ: 341 phố Vọng - Hai Bà Trưng- Hà Nội"
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
              <p className="font-14 text-r300 m-0">26.000đ</p>
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
