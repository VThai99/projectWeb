/** @format */

import React, { useState } from "react";
import { Card, Button, Modal, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Banner from "../../Images/banner2.jpg";
import Banner3 from "../../Images/banner3.jpg";
export default function BestSeller() {
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
    <div className="BestSeller">
      <div className="container_big">
        <div>
          <h3 className="font-30 text-b500 text-start ml-2 my-5">
            O Sách mới nhất
          </h3>
          <div className=" container grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="card-product">
                <NavLink to="/product-detail">
                  <Card.Img variant="top" src={Banner} />{" "}
                </NavLink>
                <div className="product_links__subbutton" onClick={handleShow}>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <Card.Body className="card-product-body">
                  <p className="font-medium">Asus 9.7 Zenpad 3s 10 64gb </p>
                  <p className="font-22 text-b500 font-medium">
                    $175.00 - $175.00
                  </p>
                  <Button variant="b500" className="btw-130 btn-square font-11" >
                    ADD TO CART
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
          <div className="text-detail">
            <p className="font-22 font-medium">
              Asus 9.7 Zenpad 3s 10 64gb Tablet (Wifi Titanium Gray)
            </p>
            <p className="font-30 text-b500 font-medium">$175.00 - $175.00</p>
            <p className="text-g600 font-medium">
              Search of staff is not an easy task.
            </p>
            <p className="text-g600">
              According to the departmental heads' of personnel management
              words, in order to find ..
            </p>
            <h4 className="font-14">Quantity:</h4>
            <div className="flex justify-between">
              <input
                className="ipw-120 height-44 text-center"
                type="text"
                id="fname"
                name="fname"
                placeholder="1"
              />
              <Button
                variant="b500"
                className="btn-square btw-250 font-14 font-semibold uppercase"
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
  );
}
