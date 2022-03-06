/** @format */

import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  FloatingLabel,
  Form,
  Image,
  ProgressBar,
  Table,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import ReactRating from "react-rating";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useHistory } from "react-router";
import Slider from "react-slick";
import Banner from "../Images/Banner3.jpeg";
import Banner6 from "../Images/ip13blue.jpg";
import Product1 from "../Images/product1.jpg";
import Product2 from "../Images/product2.jpg";
import Product3 from "../Images/product3.jpg";
export default function ProductDetail() {
  const [colorActive, setColorActive] = useState(null);
  const history = useHistory();
  const Cart = () => {
    history.push("/cart");
  };
  // const SVGIcon = (props) => (
  //   <svg className={props.className} pointerEvents="none">
  //     <use xlinkHref={props.href} />
  //   </svg>
  // );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsProduct = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  function handleStart(e) {
    console.log(e);
  }
  const colorArr = [
    { name: "Red", classActive: "background-red" },
    { name: "Yellow", classActive: "background-yellow" },
    { name: "Blue", classActive: "background-blue" },
    { name: "Black", classActive: "background-black" },
  ];
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
                Nhật kí cầu nguyện hàng ngày
              </h3>
              <h3 className="price text-center text-md-left mt-3">
                Tác giả : Trần Thị Kim Tú
              </h3>
              <h6 className="author text-center text-md-left mt-5">
                Thể loại : Tình cảm
              </h6>
              <div className="radio-price">
                <div className="price-number pl-2">
                  <p>
                    Đơn giá : <strong>59.000đ</strong>
                  </p>
                </div>
              </div>

              <div className="radio-color"></div>
              <div className="box-promotion font-14">
                <div class="promotion-title w-75 mt-5">
                  số lượng hiện tại: 5
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
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Đọc tiếp ▼"}
                  readLessText={"Thu lại ▲"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  Tôi không ưa Sato. Cậu nam sinh ngang bướng Yamaguchi được xếp
                  ngồi cạnh Sato - cô gái giản dị, chậm chạp, vụng về và hoàn
                  toàn chẳng xinh đẹp. Trong những ngày tháng rất đỗi bình yên
                  của thời học sinh cấp ba, mặc dù không muốn thừa nhận nhưng
                  Yamaguchi đang dần bị thu hút bởi cô bạn Sato ngồi cạnh. Vào
                  một ngày, chỉ bởi một câu nói của Sato khi cô bị sốt và ngất
                  xỉu, mối quan hệ giữa hai người họ tiến triển một cách nhanh
                  chóng... Đây là câu chuyện thanh xuân kể về những ngày tháng
                  thường nhật có đủ dư vị chua ngọt, có những rung động bồi hồi
                  giữa Yamaguchi và cô bạn Sato ngồi cạnh. -------------------
                  “Một thứ cảm xúc rất kỳ lạ. Sato đang ở cách xa tôi. Ở bàn bên
                  cạnh, cô ấy vẫn thường quay sang bắt chuyện với tôi, hỏi han
                  tôi một cách vượt quá mức cần thiết, và thường xuyên cho tôi
                  kẹo. Ở bàn bên cạnh, tôi vẫn hay nhìn cô ấy bị giáo viên gọi
                  lên và luôn bí câu trả lời. Ở bàn bên cạnh, tôi vẫn hay nhìn
                  cô ấy vừa cười vừa nói những câu chuyện hết sức nhàm chán, và
                  nhìn cô ấy tết lại mái tóc thành một dải duy nhất. Thế nhưng,
                  từ giờ trở đi, Sato không còn ngồi cạnh tôi nữa...” Giá sản
                  phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
                  đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà
                  có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí
                  hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước
                  ngoài có giá trị trên 1 triệu đồng).....
                </ReactReadMoreReadLess>
              </div>
            </div>
          </div>
          <div className="box-answer-comment mt-5">
            <p className="font-20 font-medium">
              Hỏi & Đáp về sản phẩm
            </p>
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
