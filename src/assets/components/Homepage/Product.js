/** @format */

import React, { useState } from "react";
import { Card, Button, Modal, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Banner from "../../Images/Banner2.gif";
import Banner3 from "../../Images/banner3.jpg";
export default function Product() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="product">
      <div className="container_big">
        <div>
          <h3 className="font-30 text-gr600 text-start ml-2 my-5">
            O Sách mới nhất
          </h3>
          <div className=" container grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm - VH media</p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm </p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>{" "}
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm </p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>{" "}
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm </p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>{" "}
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm </p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>{" "}
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm </p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>{" "}
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm </p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>{" "}
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img className="p-2" variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Tư Phàm </p>
                  <p className="font-22 text-gr600 font-medium">55000 đ</p>
                  <Button variant="y600" className="btw-130 btn-square font-11">
                    Thêm vào giỏ hàng
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-procut-detail"
        centered
      >
        <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
          <div className="image">
            <Image src={Banner} alt="banner" />
          </div>
          <div className="text-detail mt-5 ">
            <p className="font-22 font-medium">Truyện : Tư Phàm</p>
            <p className="font-30 text-gr600 font-medium">Giá : 55000 đ</p>
            <p className="text-g600 font-medium"> Tác giả : VH media</p>
            <p className="text-g600 mb-5">
              Nội dung : Một câu truyện thể loại tình cảm và hài hước .
            </p>
            <h4 className="font-14 mt-5">Số Lượng:</h4>
            <div className="flex justify-between mt-3">
              <input
                className="ipw-120 height-44 text-center"
                type="text"
                id="fname"
                name="fname"
                placeholder="1"
              />
              <Button
                variant="y600"
                className="btn-square btw-250 font-14 font-semibold uppercase"
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
            <Button
              variant="g300"
              className="btn-square w-100 font-14 font-semibold uppercase mt-5"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
