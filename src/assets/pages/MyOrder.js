/** @format */

import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cart } from "../../services/cart";
import { ProductDetailService } from "../../services/ProductDetailService";
export default function MyOrder() {
  const userId = localStorage.getItem("user_id");
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);
  function getOrder() {
    cart.getOrder(parseInt(userId)).then((res) => {
      setOrderList(res.data);
    });
  }

  return (
    <div className="cart-page">
      <div className="box-cart h-100 ct-order mb-2">
        <div className="px-4 py-4">
          <h3 className=" text-center text-y500 ct-header-order">
            {" "}
            Danh sách order{" "}
          </h3>

          {orderList.map((item, index) => {
            return (
              <div className="border-b-4 mt-4  pb-2" key={index}>
                {item.listBook?.map((itemBook, idxBook) => {
                  return (
                    <div className="row my-2" key={idxBook}>
                      <div className="col-5 ">
                        <Image
                          src= "aa"
                          alt="image"
                          className="ct-image-order"
                        />
                      </div>
                      <div className="col-7">
                        <div className="row mt-4 ml-2">
                          <div className="font-23">
                            <b>
                              Tên sách : 
                             
                            </b>
                          </div>
                        </div>
                        <div className="row mt-2 ml-2">
                          <div className="font-20">
                            Tác giả : 
                          </div>
                        </div>
                        -----------------------------
                        <div className="row mt-2   ml-2">
                          <div className="col-5 pl-0">
                            <div className="font-15 text-r300 ">
                              Giá :{itemBook.basePrice} đ
                            </div>
                          </div>
                          <div className="col-7">
                            <div className="font-15 text-r300 ">
                              Số lượng : {itemBook.quantity}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-7"> ------------------- </div>
                          <div className="col-5 ct-add-order text-center">
                            {" "}
                            <Link to={`/product-detail/${22}`}>Mua thêm</Link>
                          </div>
                        </div>
                        <div className="row mt-3 ml-2">
                          <div className="font-20 text-r300 "></div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="mt-2">
                  <div className="row mt-3 ml-2">
                    <div className="font-20 text-r300 ">
                      Thanh tien: {item.totalPrice}
                    </div>
                  </div>
                  <div className="row mt-2 ml-2">
                    <div className="font-15">
                      Tình trạng :{" "}
                      <span className="ct-order-completed px-2">
                        {item.status}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="row mt-2 ml-2">
                    <div className="font-15">
                      Ngày đặt :{" "}
                      {new Date(item.createdAt).toISOString().slice(0, 10)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 ">
          <Button
            className="form-control w-25 mb-4"
            variant="info"
            //   onClick={() => setLimit(limit + 8)}
          >
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
}
