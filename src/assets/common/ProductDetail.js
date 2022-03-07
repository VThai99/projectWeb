/** @format */

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  FloatingLabel,
  Form,
  Image,
} from "react-bootstrap";
import { ProductDetailService } from "../../services/ProductDetailService";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useHistory, useParams } from "react-router";

import Banner from "../Images/Banner3.jpeg";
export default function ProductDetail() {
  let { id } = useParams();
  const history = useHistory();
  const Cart = () => {
    history.push("/cart");
  };
  const [data, setData] = useState([]);
  const [athur, setathur] = useState();

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    ProductDetailService.getDetail(id).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
        console.log(response.data.authors.length);
      }
    });
  }
  return (
    <div>
      <div className="product-detail-page">
        <div className="container height640">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>Book detail</Breadcrumb.Item>
          </Breadcrumb>
          <div className="box-detail grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="image">
                <div className="image_3_2">
                  <Image src={Banner} alt="banner" />
                </div>
              </div>
            </div>
            <div className="product-information mt-5">
              <h3 className="name text-center text-md-left">Tên sách :</h3>
              <h3 className="name2 text-center text-md-center mt-4">
                {data?.name}
              </h3>
              <h3 className="price text-center text-md-left mt-3">
                {/*  : {data?.authors[0].id} */}
                Tác giả : {data.authors?.length && data.authors[0].name}
                {/* {data.map((item, index) => {
                  return {item};
                })} */}
              </h3>
              <h6 className="author text-center text-md-left mt-5">
                {/*{data?.authors.length } */}
                Thể loại :  {data.types?.length && data.types[0].name}
                {/* 0 && data.authors[0].name */}
              </h6>
              <div className="radio-price">
                <div className="price-number pl-2">
                  <p>
                    Đơn giá : <strong>{data.price}</strong> đ
                  </p>
                </div>
              </div>

              <div className="radio-color"></div>
              <div className="box-promotion font-14">
                <div className="promotion-title w-75 mt-5">
                  số lượng hiện tại: {data.inventory}
                </div>
              </div>
              <Button
                variant="r200"
                className="btn-square w-75 btn-buy-now mt-5"
                onClick={Cart}
              >
                <h3 className="uppercase font-20">Mua ngay</h3>
                <p className="font-13 m-0">
                  Giao hàng miễn phí hoặc nhận tại shop
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-info mt-5">
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="product-features col-span-12 md:col-span-12">
              <div className="mt-5">
                <h3 className="font-20  font-medium ml-3 mb-4">
                  O Đánh giá chi tiết : Nhật kí cầu nguyện hàng ngày
                </h3>
                <br />
                {/* <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Đọc tiếp ▼"}
                  readLessText={"Thu lại ▲"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  <p></p>
                </ReactReadMoreReadLess> */}
                <p className="pl-5"> {data.description}</p>
              </div>
            </div>
          </div>
          <div className="box-answer-comment mt-5">
            <p className="font-20 font-medium">Hỏi & Đáp về sản phẩm</p>
            <>
              <FloatingLabel controlId="floatingTextarea" className="relative">
                <Form.Control
                  as="textarea"
                  placeholder="Câu hỏi"
                  style={{ height: "80px" }}
                  className="textarea-comment"
                />
                <Button
                  variant="r200"
                  className="btn-evaluate btn-square btw-130 col-4 col-md-2"
                >
                  <p className="font-13">Gửi đánh giá</p>
                </Button>
              </FloatingLabel>
            </>
            <div className="box-c-user-comment grid grid-cols-12 gap-6">
              <div className="avatar col-span-12 md:col-span-2 lg:col-span-1">
                {/* <Image src={Banner6} alt="banner" /> */}
              </div>
              <div className="c-comment-box__content col-span-12 md:col-span-10 lg:col-span-11">
                <p className="font-18 m-0">
                  Người dùng{" "}
                  <span className="font-14 text-g200 ml-2">1 ngày trước</span>
                </p>{" "}
                <p className="font-16 text-g100 m-0">
                  Sách rất hay !! Yêu thương
                </p>
                <Button variant="link" className="btn-square btw-65-answer">
                  <p className="font-14">Trả lời</p>
                </Button>
                <>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    className="relative"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Câu hỏi"
                      style={{ height: "80px" }}
                      className="textarea-comment"
                    />
                    <Button
                      variant="r200"
                      className="btn-evaluate btn-square btw-120 col-4 col-md-2"
                    >
                      <p className="font-13">Viết câu hỏi</p>
                    </Button>
                  </FloatingLabel>
                </>
              </div>
            </div>
            <div className="box-c-user-comment grid grid-cols-12 gap-6">
              <div className="avatar col-span-12 md:col-span-2 lg:col-span-1">
                {/* <Image src={Banner6} alt="banner" /> */}
              </div>
              <div className="c-comment-box__content col-span-12 md:col-span-10 lg:col-span-11">
                <p className="font-18 m-0">
                  Người dùng{" "}
                  <span className="font-14 text-g200 ml-2">1 ngày trước</span>
                </p>{" "}
                <p className="font-16 text-g100 m-0">
                  Sách rất hay !! Yêu thương
                </p>
                <Button variant="link" className="btn-square btw-65-answer">
                  <p className="font-14">Trả lời</p>
                </Button>
                <div className="c-admin-comment">
                  <p className="font-18 m-0 d-flex items-center">
                    Admin
                    <span className="text-admin font-10 ml-2">
                      Quản trị viên
                    </span>
                    <span className="font-14 text-g200 ml-2">1 giờ trước</span>
                  </p>{" "}
                  <p className="font-16 text-g100 m-0">
                    bạn có thể mua trước tiếp ở cửa hàng MobieX ở HN nhé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
