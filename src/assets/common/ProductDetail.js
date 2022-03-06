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
import Banner from "../Images/ip13.jpg";
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
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>Sach detail</Breadcrumb.Item>
          </Breadcrumb>
          <div className="box-detail grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Slider {...settings}>
                <div className="image">
                  <div className="image_3_2">
                    <Image src={Banner} alt="banner" />
                  </div>
                </div>
                <div className="image">
                  <div className="image_3_2">
                    <Image src={Banner6} alt="banner" />
                  </div>
                </div>
                <div className="image">
                  <div className="image_3_2">
                    <Image src={Banner} alt="banner" />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="product-information">
              <h3 className="price text-center text-md-left">
                36.490.000đ <span>36.990.000đ</span>
              </h3>
              <div className="radio-price">
                <ToggleButtonGroup
                  className="radio-items grid grid-flow-col auto-cols-max gap-4"
                  type="radio"
                  name="options"
                  defaultValue={2}
                >
                  <ToggleButton id="tbg-radio-1" value={1}>
                    <div className="items-price">
                      <p className="m-2 font-medium">512GB</p>
                      <p className="m-0">36.990.000đ</p>
                    </div>
                  </ToggleButton>

                  <ToggleButton id="tbg-radio-2" value={2}>
                    <div className="items-price">
                      <p className="m-2 font-medium">256GB</p>
                      <p className="m-0">36.990.000đ</p>
                    </div>
                  </ToggleButton>
                  <ToggleButton id="tbg-radio-3" value={3}>
                    <div className="items-price">
                      <p className="m-2 font-medium">128GB</p>
                      <p className="m-0">36.990.000đ</p>
                    </div>
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div className="my-3 text-center text-md-left">
                {colorArr.map((item, index) => {
                  return (
                    <Button
                      variant="border-g100"
                      onClick={() => {
                        setColorActive(index);
                      }}
                      className={
                        colorActive === index
                          ? `${item.classActive} btw-46 font-12 mr-2`
                          : "btw-46 font-12 mr-2"
                      }
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </div>
              <div className="radio-color"></div>
              <div className="box-promotion font-14">
                <div class="promotion-title">Nhận ngay khuyến mại đặc biệt</div>
                <div className="promotion-list">
                  <p>
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    Trả góp 0%
                  </p>
                  <p>
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    Tặng gói iCloud 50GB miễn phí 3 tháng
                  </p>
                  <p>
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    Thu cũ đổi mới trợ giá 20% đến 3 triệu
                  </p>
                  <p>
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    Tặng bảo hành 2 năm
                  </p>
                  <p>
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    Tặng eSim Thần Tám 79 Itel 1T Data khủng 90GB
                  </p>
                  <p>
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ
                  </p>
                </div>
              </div>
              <Button
                variant="r200"
                className="btn-square w-100 btn-buy-now mt-3"
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
        <div className="product-detail-info mt-5">
          <div className="container">
            <div className="grid grid-cols-12 gap-5">
              <div className="product-features col-span-12 md:col-span-7">
                <h3 className="font-20 font-medium mb-5">
                  Đặc điểm nổi bật của iPhone 13 Pro Max
                </h3>
                <div>
                  <Slider {...settingsProduct}>
                    <div className="image_h375">
                      <Image src={Product1} alt="banner" />
                    </div>
                    <div className="image_h375">
                      <Image src={Product2} alt="banner" />
                    </div>
                    <div className="image_h375">
                      <Image src={Product3} alt="banner" />
                    </div>
                  </Slider>
                </div>
                <div className="mt-5">
                  <h3 className="font-20 font-medium text-center mb-4">
                    Đánh giá chi tiết iPhone 13 Pro Max
                  </h3>
                  <b className="g500 title-header">
                    iPhone 12 ra mắt với vai trò mở ra một kỷ nguyên hoàn toàn
                    mới. Tốc độ mạng 5G siêu tốc, bộ vi xử lý A14 Bionic nhanh
                    nhất thế giới smartphone, màn hình OLED tràn cạnh tuyệt đẹp
                    và camera siêu chụp đêm, tất cả đều có mặt trên iPhone 12.
                  </b>{" "}
                  <br />
                  <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={"Đọc tiếp ▼"}
                    readLessText={"Thu lại ▲"}
                    readMoreClassName="read-more-less--more"
                    readLessClassName="read-more-less--less"
                  >
                    iPhone 13 Pro Max xứng đáng là một chiếc iPhone lớn nhất,
                    mạnh mẽ nhất và có thời lượng pin dài nhất từ trước đến nay
                    sẽ cho bạn trải nghiệm tuyệt vời, từ những tác vụ bình
                    thường cho đến các ứng dụng chuyên nghiệp.Đắm chìm trong
                    không gian màn hình lớn cực đã Dù là giải trí khi xem phim,
                    chơi game hay kiểm tra email, đọc tài liệu thì màn hình lớn
                    tới 6,7 inch của iPhone 13 Pro Max cũng luôn cho trải nghiệm
                    tuyệt vời nhất. Không chỉ lớn, đây còn là màn hình chất
                    lượng hàng đầu thế giới smartphone với tấm nền OLED tuyệt
                    đẹp, công nghệ Super Retina XDR siêu nét và độ sáng tối đa
                    đạt mức khó tin, lên tới 1200 nits cho nội dung HDR. Trước
                    mắt bạn là một không gian giải trí mãn nhãn, một thiết bị di
                    động lý tưởng để giải quyết nhanh công việc với màn hình
                    thực sự xuất sắc.
                  </ReactReadMoreReadLess>
                </div>
              </div>
              <div className="product-parameter  col-span-12 md:col-span-5">
                <Table striped bordered hover>
                  <tbody className="font-14">
                    <tr>
                      <td>Màn hình</td>
                      <td>@6.7", Super Retina XDR, OLED, 2778 x 1284 Pixel</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>@12.0 MP + 12.0 MP + 12.0 MP</td>
                    </tr>
                    <tr>
                      <td>RAM </td>
                      <td>@12.0 MP</td>
                    </tr>
                    <tr>
                      <td>RAM </td>
                      <td>6 GB</td>
                    </tr>
                    <tr>
                      <td>Bộ nhớ trong </td>
                      <td>128 GB</td>
                    </tr>
                    <tr>
                      <td>CPU </td>
                      <td>A15 Bionic</td>
                    </tr>
                    <tr>
                      <td>GPU </td>
                      <td>Apple GPU 5 nhân</td>
                    </tr>
                    <tr>
                      <td>Dung lượng pin </td>
                      <td>4352 mAh</td>
                    </tr>
                    <tr>
                      <td>Thẻ sim </td>
                      <td>2, 1 eSIM, 1 Nano SIM</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành </td>
                      <td>iOS 15</td>
                    </tr>
                    <tr>
                      <td>Xuất xứ </td>
                      <td> Trung Quốc</td>
                    </tr>
                    <tr>
                      <td>Ra mắt </td>
                      <td>09/2021</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="product-rating mt-5">
              <div className="box-rating ">
                <h3 className="font-20 font-medium mb-3">
                  Đánh giá & Nhận xét
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="average_rating text-center">
                    <h5 className="font-16 font-normal">Đánh giá trung bình</h5>
                    <div className="number_rating">4/5</div>
                    <div className="rating">
                      {/* <ReactRating initialRating={5} readonly /> */}

                      <ReactRating
                        initialRating={4}
                        readonly
                        emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star"
                        fractions={2}
                      />
                    </div>
                    <p className="font-14 text-g200 mt-1">
                      1 đánh giá & 0 nhận xét
                    </p>
                  </div>
                  <div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1 ">
                        5 <i class="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={40}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        4 <i class="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={30}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        3 <i class="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={20}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        2 <i class="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={10}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        1 <i class="fa fa-star ml-1"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h5 className="font-14 text-g100 font-normal">
                      Bạn đã dùng sản phẩm này?
                    </h5>
                    <Button variant="r200" className="btn-square btw-158 ">
                      <p className="font-13">Gửi đánh giá của bạn</p>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="box-comment">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="">
                    <p className="font-18 text-medium">
                      Bạn chấm sản phẩm này bao nhiêu sao?
                    </p>
                    <ReactRating
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                      fractions={2}
                      onChange={(e) => handleStart(e)}
                    />
                  </div>
                  <div className="col-span-2">
                    <>
                      <FloatingLabel
                        controlId="floatingTextarea"
                        className="mb-3 relative"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Câu hỏi"
                          style={{ height: "100px" }}
                          className="textarea-comment"
                        />
                        <Button
                          variant="r200"
                          className="btn-evaluate btn-square btw-130 col-4 col-md-2 col-md-2"
                        >
                          <p className="font-13">Gửi đánh giá</p>
                        </Button>
                      </FloatingLabel>
                    </>
                  </div>
                </div>
              </div>
              <div className="box-c-user-comment grid grid-cols-12 gap-6">
                <div className="avatar col-span-3 md:col-span-2 lg:col-span-1">
                  <Image src={Banner6} alt="banner" />
                </div>
                <div className="c-comment-box__content col-span-9 md:col-span-10">
                  <p className="font-18 m-0">Duy Anh</p>
                  <ReactRating
                    initialRating={1}
                    readonly
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star"
                    fractions={2}
                  />
                  <span className="font-14 text-g200 ml-2">1 ngày trước</span>
                  <p className="font-16 text-g100">
                    tôi muốn đặt mua Iphone thì có thể mua ở đâu ?
                  </p>
                </div>
              </div>
            </div>
            <div className="box-answer-comment mt-5">
              <p className="font-20 font-medium">
                Hỏi & Đáp về iPhone 13 Pro Max
              </p>
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
                    className="btn-evaluate btn-square btw-130 col-4 col-md-2"
                  >
                    <p className="font-13">Gửi đánh giá</p>
                  </Button>
                </FloatingLabel>
              </>
              <div className="box-c-user-comment grid grid-cols-12 gap-6">
                <div className="avatar col-span-12 md:col-span-2 lg:col-span-1">
                  <Image src={Banner6} alt="banner" />
                </div>
                <div className="c-comment-box__content col-span-12 md:col-span-10 lg:col-span-11">
                  <p className="font-18 m-0">
                    Người dùng{" "}
                    <span className="font-14 text-g200 ml-2">1 ngày trước</span>
                  </p>{" "}
                  <p className="font-16 text-g100 m-0">
                    tôi muốn đặt mua Iphone thì có thể mua ở đâu ?
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
                  <Image src={Banner6} alt="banner" />
                </div>
                <div className="c-comment-box__content col-span-12 md:col-span-10 lg:col-span-11">
                  <p className="font-18 m-0">
                    Người dùng{" "}
                    <span className="font-14 text-g200 ml-2">1 ngày trước</span>
                  </p>{" "}
                  <p className="font-16 text-g100 m-0">
                    tôi muốn đặt mua Iphone thì có thể mua ở đâu ?
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
                      <span className="font-14 text-g200 ml-2">
                        1 giờ trước
                      </span>
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
    </div>
  );
}
