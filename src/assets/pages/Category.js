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
import { NavLink } from "react-router-dom";
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
                            <NavLink to="/product-detail">
                              <Card.Img
                                className="p-2 "
                                variant="top"
                                src={img1}
                              />
                            </NavLink>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body">
                              <p className="font-medium">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium">
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
                            <NavLink to="/product-detail">
                              <Card.Img
                                className="p-2"
                                variant="top"
                                src={img2}
                              />
                            </NavLink>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body">
                              <p className="font-medium">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium">
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
                            <NavLink to="/product-detail">
                              <Card.Img
                                className="p-2"
                                variant="top"
                                src={img3}
                              />
                            </NavLink>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body">
                              <p className="font-medium">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium">
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
                            <NavLink to="/product-detail">
                              <Card.Img
                                className="p-2"
                                variant="top"
                                src={img4}
                              />
                            </NavLink>
                            <div
                              className="product_links__subbutton"
                              onClick={handleShow}
                            >
                              <i
                                class="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <Card.Body className="card-product-body">
                              <p className="font-medium">
                                Nhật ký cầu nguyện hàng ngày
                              </p>
                              <p className="font-medium">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="image">
                    <Image src={img1} alt="img1" />
                  </div>
                  <div className="text-detail">
                    <p className="font-22 font-medium">
                      Asus 9.7 Zenpad 3s 10 64gb Tablet (Wifi Titanium Gray)
                    </p>
                    <p className="font-30 text-gr600 font-medium">
                      $175.00 - $175.00
                    </p>
                    <p className="text-g600 font-medium">
                      Search of staff is not an easy task.
                    </p>
                    <p className="text-g600">
                      According to the departmental heads' of personnel
                      management words, in order to find ..
                    </p>
                    <h4 className="font-14">Quantity:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        className="w-100 height-44 text-center"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="1"
                      />
                      <Button
                        variant="y600"
                        className="btn-square w-100 font-14 font-semibold uppercase"
                      >
                        A Thêm vào giỏ hàng
                      </Button>
                    </div>
                    <Button
                      variant="g300"
                      className="btn-square w-100 font-14 font-semibold uppercase mt-3"
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
