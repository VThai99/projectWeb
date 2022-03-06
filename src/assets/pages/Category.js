/** @format */

import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Image,
  Modal,
  Pagination,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import img1 from "../Images/Banner3.jpeg";
import img2 from "../Images/Banner7.jpeg";
import img3 from "../Images/Banner5.jpeg";
import img4 from "../Images/Banner4.jpeg";
let active = [];
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
export default function Category() {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="catalog-page">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>Thể loại</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mt-5">
            <div className="list-product">
              <div className="container_big">
                <div className="tab-choose ">
                  <Tabs
                    defaultActiveKey="1"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-5"
                  >
                    <Tab eventKey="1" title="Trinh thám">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Card className="card-product">
                            <Link to="/product-detail">
                              <Card.Img
                                className="p-2 "
                                variant="top"
                                src={img1}
                              />
                            </Link>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body pt-2">
                              <p className="font-medium mb-0">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium  mb-0">
                                <small>Tác giả - Trần thị kim tú</small>
                              </p>
                              <p className="font-22 text-gr600 font-medium">
                                Giá : 55000 đ
                              </p>
                              <Button
                                variant="y600"
                                className="btw-130 btn-square font-11"
                              >
                                Thêm vào giỏ hàng
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="2" title="Tình cảm">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                        <Card className="card-product">
                            <Link to="/product-detail">
                              <Card.Img
                                className="p-2 "
                                variant="top"
                                src={img2}
                              />
                            </Link>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body pt-2">
                              <p className="font-medium mb-0">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium  mb-0">
                                <small>Tác giả - Trần thị kim tú</small>
                              </p>
                              <p className="font-22 text-gr600 font-medium">
                                Giá : 55000 đ
                              </p>
                              <Button
                                variant="y600"
                                className="btw-130 btn-square font-11"
                              >
                                Thêm vào giỏ hàng
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="3" title="Kiếm hiệp">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                        <Card className="card-product">
                            <Link to="/product-detail">
                              <Card.Img
                                className="p-2 "
                                variant="top"
                                src={img3}
                              />
                            </Link>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body pt-2">
                              <p className="font-medium mb-0">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium  mb-0">
                                <small>Tác giả - Trần thị kim tú</small>
                              </p>
                              <p className="font-22 text-gr600 font-medium">
                                Giá : 55000 đ
                              </p>
                              <Button
                                variant="y600"
                                className="btw-130 btn-square font-11"
                              >
                                Thêm vào giỏ hàng
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="4" title="Ngôn Tình">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                        <Card className="card-product">
                            <Link to="/product-detail">
                              <Card.Img
                                className="p-2 "
                                variant="top"
                                src={img4}
                              />
                            </Link>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body pt-2">
                              <p className="font-medium mb-0">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium  mb-0">
                                <small>Tác giả - Trần thị kim tú</small>
                              </p>
                              <p className="font-22 text-gr600 font-medium">
                                Giá : 55000 đ
                              </p>
                              <Button
                                variant="y600"
                                className="btw-130 btn-square font-11"
                              >
                                Thêm vào giỏ hàng
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>

                <div className="flex justify-center mt-5">
                  <Pagination size="sm">{items}</Pagination>
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
                    <Image src={img1} alt="banner" />
                  </div>
                  <div className="text-detail mt-5 ">
                    <p className="font-22 font-medium">Truyện : Tư Phàm</p>
                    <p className="font-30 text-gr600 font-medium">
                      Giá : 55000 đ
                    </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
