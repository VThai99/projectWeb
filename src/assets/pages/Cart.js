/** @format */

import React, { useEffect, useState } from "react";
import { Button, Form, Image, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { cart } from "../../services/cart";
import { customer } from "../../services/customer";
import emptyCart from "../Images/empty-cart.gif";

export default function Cart() {
  const product = useSelector((state) => state.Cart);
  const [totalMoney, setTotalMoney] = useState(0);
  const [promotionList, setPromotionList] = useState([]);
  const [discountPercent, setDiscount] = useState(0);
  const [code, setCode] = useState("");
  const count = useSelector((state) => state.numberCart);
  const dispatch = useDispatch();
  const history = useHistory();
  const nameOld = localStorage.getItem("user_name");
  const [userData, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    customer.getlist().then((res) => {
      for (const key in res.data) {
        if (res.data[key]?.username == nameOld) {
          var a = res.data[key];
        }
      }
      setUser(a);
    });
  }
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
      staffId: null,
      customerId: userData.id,
      codeId: discountPercent ? discountPercent.id : null,
      basePrice: totalMoney,
      promotion: discountPercent ? discountPercent.promotionPercent : null,
      totalPrice:
        totalMoney -
        parseFloat(
          (totalMoney * discountPercent
            ? discountPercent.promotionPercent
            : 0) / 100
        ),
      createdAt: new Date().toISOString(),
      status: "pending",
      listBook: listBookArray,
    };
    cart.createOrder(dataOrder).then((res) => {
      if (res.status == 200) {
        Swal.fire("Success!", `Order Success`, "success").then((response) => {
          localStorage.removeItem("cart");
          localStorage.removeItem("count");
          setCode("")
          for (const key in product) {
            removeItem(product[key].product.id);
          }
          history.push('/my-order')
        });
      } else {
        Swal.fire("Fail", "Order Fail", "error");
      }
    });
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
  const updateQuantity = (e, idItem) => {
    if (e.target.value === "") {
      e.target.value = 0;
    }
    let quantity = e.target.value;
    if (quantity === "0") {
      removeItem(idItem);
    }
    dispatch({
      type: "UPDATEQUANTITY",
      id: idItem,
      updateQuantity: quantity,
    });
  };
  function handleCheckCode() {
    var discount = {};
    for (const key in promotionList) {
      if (promotionList[key].code == code && promotionList[key].status == "success") {
        discount = promotionList[key];
      }
    }
    if (!discount.promotionPercent) {
      Swal.fire("Wrong!", `Your code is invalid`, "warning");
    } else {
      Swal.fire(
        "Success!",
        `Your discount is ${discount.promotionPercent} percent`,
        "success"
      ).then((response) => {
        setDiscount(discount);
      });
    }
  }
  return (
    <div className="cart-page">
      <div className="box-cart">
        {count >= 1 ? (
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
                            var a = item.product.id;
                            updateQuantity(e, a);
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
              <p className="font-14 text-r300 p-0">
                {formatMoney(totalMoney)}đ
              </p>
            </div>
          </div>
        ) : (
          <div style={{ position: "relative" }} className="py-4">
            <img src={emptyCart} alt="" />
            <span
              style={{
                position: "absolute",
                right: "0px",
                top: "0px",
                borderRadius: "50%",
                border: "1px solid red",
                width: "90px",
                height: "90px",
                textAlign: "center",
                background: "red",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "blue",
              }}
              onClick={() => {
                history.push("/");
              }}
            >
              Mua hàng nào!
            </span>
          </div>
        )}
        <div className="box-cart-detail ">
          <div className="uppercase mb-2"> Nhập mã giảm giá </div>
          <Form className="grid grid-rows-1 grid-flow-col gap-4">
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="mã giảm giá"
                value={code}
                disabled={count >= 1 ? false : true}
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
                disabled={code ? false : true}
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
              <p className="font-14 text-r300 m-0">
                {discountPercent.promotionPercent} %
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-16 font-semibold m-0">Thành tiền:</p>
              <p className="font-14 text-r300 m-0">
                {discountPercent.promotionPercent
                  ? formatMoney(
                      totalMoney -
                        (totalMoney * discountPercent.promotionPercent) / 100
                    )
                  : formatMoney(totalMoney)}
                đ
              </p>
            </div>
            <Button
              variant="submitorder"
              className="btn-square w-100 font-14 uppercase font-bold mt-3"
              disabled={count >= 1 ? false : true}
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
