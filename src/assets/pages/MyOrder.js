/** @format */

import React, { useEffect, useState } from "react";
import { Button, Form, Image, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link} from "react-router-dom";
import Swal from "sweetalert2";
import { cart } from "../../services/cart";
import { customer } from "../../services/customer";
import emptyCart from "../Images/empty-cart.gif";
export default function MyOrder() {
  return (
    <div className="cart-page">
      <div className="box-cart h-100 ct-order mb-2">
        <div className="px-4 py-4">
          <h3 className=" text-center text-y500 ct-header-order">
            {" "}
            Danh sách order{" "}
          </h3>

          <div className="border-b-4 mt-4  pb-2">
            <div className="row ">
              <div className="col-5 ">
                <Image
                  src="https://res.cloudinary.com/cloudygod/image/upload/v1646924506/product/file_ojlpj2.jpg"
                  alt="image"
                  className="ct-image-order"
                />
              </div>
              <div className="col-7">
                <div className="row mt-4 ml-2">
                  <div className="font-23">
                    <b>Tên sách : sách tình cảm</b>
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-20">Tác giả : Bố tùng</div>
                </div>
                -----------------------------
                <div className="row mt-2   ml-2">
                  <div className="col-5 pl-0">
                    <div className="font-15 text-r300 ">Giá :112121 đ</div>
                  </div>
                  <div className="col-7">
                    <div className="font-15 text-r300 ">Số lượng : 10</div>
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-15">
                    Tình trạng :{" "}
                    <span className="ct-order-completed px-2">Thành công</span>{" "}
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-15">Ngày đặt : 12/2/2020</div>
                </div>
                <div className="row">
                  <div className="col-7"> ------------------- </div>
                  <div className="col-5 ct-add-order text-center">
                    {" "}
                    <Link to={`/product-detail/17`}>Mua thêm</Link>
                  </div>
                </div>
                <div className="row mt-3 ml-2">
                  <div className="font-20 text-r300 ">Thành tiền : 12000 đ</div>
                </div>
              </div>{" "}
            </div>
          </div>

          <div className="border-b-4 mt-4  pb-2">
            <div className="row ">
              <div className="col-5 ">
                <Image
                  src="https://res.cloudinary.com/cloudygod/image/upload/v1646924506/product/file_ojlpj2.jpg"
                  alt="image"
                  className="ct-image-order"
                />
              </div>
              <div className="col-7">
                <div className="row mt-4 ml-2">
                  <div className="font-23">
                    <b>Tên sách : sách tình cảm</b>
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-20">Tác giả : Bố tùng</div>
                </div>
                -----------------------------
                <div className="row mt-2   ml-2">
                  <div className="col-5 pl-0">
                    <div className="font-15 text-r300 ">Giá :112121 đ</div>
                  </div>
                  <div className="col-7">
                    <div className="font-15 text-r300 ">Số lượng : 10</div>
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-15">
                    Tình trạng :{" "}
                    <span className="ct-order-completed px-2">Thành công</span>{" "}
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-15">Ngày đặt : 12/2/2020</div>
                </div>
                <div className="row">
                  <div className="col-7"> ------------------- </div>
                  <div className="col-5 ct-add-order text-center">
                    {" "}
                    Mua thêm
                  </div>
                </div>
                <div className="row mt-3 ml-2">
                  <div className="font-20 text-r300 ">Thành tiền : 12000 đ</div>
                </div>
              </div>{" "}
            </div>
          </div>

          <div className="border-b-4 mt-4  pb-2">
            <div className="row ">
              <div className="col-5 ">
                <Image
                  src="https://res.cloudinary.com/cloudygod/image/upload/v1646924506/product/file_ojlpj2.jpg"
                  alt="image"
                  className="ct-image-order"
                />
              </div>
              <div className="col-7">
                <div className="row mt-4 ml-2">
                  <div className="font-23">
                    <b>Tên sách : sách tình cảm</b>
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-20">Tác giả : Bố tùng</div>
                </div>
                -----------------------------
                <div className="row mt-2   ml-2">
                  <div className="col-5 pl-0">
                    <div className="font-15 text-r300 ">Giá :112121 đ</div>
                  </div>
                  <div className="col-7">
                    <div className="font-15 text-r300 ">Số lượng : 10</div>
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-15">
                    Tình trạng :
                    <span className="ct-order-ship px-2">đang vận chuyển</span>{" "}
                  </div>
                </div>
                <div className="row mt-2 ml-2">
                  <div className="font-15">Ngày đặt : 12/2/2020</div>
                </div>
                -----------------------------
                <div className="row mt-3 ml-2">
                  <div className="font-20 text-r300 ">Thành tiền : 12000 đ</div>
                </div>
              </div>{" "}
            </div>
          </div>
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
