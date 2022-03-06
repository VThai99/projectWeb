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
import Banner from "../Images/banner2.jpg";
import Apple from "../Images/ip13blue.jpg";
import Oppo from "../Images/oppo.jpg";
import Samsung from "../Images/samsung.jpg";
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

            <Breadcrumb.Item active>Category</Breadcrumb.Item>
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
                              <Card.Img variant="top" src={Banner} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
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
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Apple} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
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
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
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
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Samsung} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                        <div>
                          <Card className="card-product">
                            <NavLink to="/product-detail">
                              <Card.Img variant="top" src={Oppo} />{" "}
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
                                Asus 9.7 Zenpad 3s 10 64gb{" "}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                $175.00 - $175.00
                              </p>
                              <Button
                                variant="b500"
                                className="btw-130 btn-square font-11"
                              >
                                ADD TO CART
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
                    <Image src={Banner} alt="banner" />
                  </div>
                  <div className="text-detail">
                    <p className="font-22 font-medium">
                      Asus 9.7 Zenpad 3s 10 64gb Tablet (Wifi Titanium Gray)
                    </p>
                    <p className="font-30 text-b500 font-medium">
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
                        variant="b500"
                        className="btn-square w-100 font-14 font-semibold uppercase"
                      >
                        Add to cart
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
