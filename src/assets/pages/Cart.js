/** @format */

import React, { useEffect, useState } from "react";
import { Button, Form, Image, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { cart } from "../../services/cart";
import Banner from "../Images/Banner1.jpeg";

export default function Cart() {
  const product = useSelector((state) => state.Cart);
  const [totalMoney, setTotalMoney] = useState(0);
  const [promotionList, setPromotionList] = useState([]);
  const [discountPercent, setDiscount] = useState(0);
  const [code, setCode] = useState("");
  const count = useSelector((state) => state.numberCart);
  const dispatch = useDispatch();
  const history = useHistory();
  const orderSuccess = () => {
    console.log(product);
    var listBookArray = [];
    for (const key in product) {
      listBookArray.push({
        id: 0,
        bookId: product[key].product.id,
        basePrice: product[key].product.price,
        promotion: 0,
        totalPrice: product[key].total,
        quantity: product[key].quantity,
      });
    }
    var dataOrder = {
      id: 0,
      staffId: 0,
      customerId: 0,
      codeId: 0,
      basePrice: 0,
      promotion: 0,
      totalPrice: totalMoney,
      createdAt: "2022-03-11T14:52:11.671Z",
      status: "string",
      listBook: listBookArray,
    };
    console.log("====================================");
    console.log(dataOrder);
    console.log("====================================");
  };
  useEffect(() => {
    const getTotal = () => {
      let total = 0;
      product.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      setTotalMoney(total);
    };
    localStorage.setItem("count", count);
    localStorage.setItem("cart", JSON.stringify(product));
    getTotal();
  }, [product, count]);
  useEffect(() => {
    getPromotion();
  }, []);
  const getPromotion = () => {
    cart.getAllPromotion().then((res) => {
      setPromotionList(res.data);
    });
  };
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
  function handleCheckCode() {
    var discount = 0;
    for (const key in promotionList) {
      if (promotionList[key].code == code) {
        discount = promotionList[key].promotionPercent;
      }
    }
    if (discount != 0) {
      Swal.fire(
        "Success!",
        `Your discount is ${discount} percent`,
        "success"
      ).then((response) => {
        setDiscount(discount);
      });
    } else {
      Swal.fire("Wrong!", `Your code is invalid`, "warning");
    }
  }
  return (
    <div className="cart-page">
      <div className="box-cart">
        <div className="px-4 py-4">
          {product.map((item, index) => {
            return (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 md:col-span-2">
                  <div className="cart-image-product">
                    <Image src={item.product.imagePath} alt="image" />
                  </div>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <div className="flex justify-between items-center">
                    <h4 className="font-14 font-medium m-0">
                      {item.product.name}
                    </h4>
                    <p className="font-14 text-r300 m-0">
                      Giá: {formatMoney(item.product.price)}đ{" "}
                      <Button
                        color="danger"
                        variant="contained"
                        onClick={() => removeItem(item.product.id)}
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
                          updateQuantity(e, item.product.id);
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
          <div className="uppercase mb-2"> Nhập mã giảm giá </div>
          <Form className="grid grid-rows-1 grid-flow-col gap-4">
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="mã giảm giá"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                className=""
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant="outline-secondary"
                onClick={handleCheckCode}
                className="btn-square w-100 font-14 uppercase font-bold"
              >
                Check Code
              </Button>
            </Form.Group>
          </Form>
          <div className="tab-choose mt-4">
            <div className="flex justify-between">
              <p className="font-16 font-semibold m-0">Tổng tiền:</p>
              <p className="font-14 text-r300 m-0">
                {formatMoney(totalMoney)} đ
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-16 font-semibold m-0">Giảm giá:</p>
              <p className="font-14 text-r300 m-0">{discountPercent} %</p>
            </div>
            <div className="flex justify-between">
              <p className="font-16 font-semibold m-0">Thành tiền:</p>
              <p className="font-14 text-r300 m-0">
                {formatMoney(totalMoney - (totalMoney * discountPercent) / 100)}{" "}
                đ
              </p>
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
