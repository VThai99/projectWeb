/** @format */

import React, { useState } from "react";
import { Button, Card, Image, Modal } from "react-bootstrap";
import { FaBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
export default function Product({ books }) {
  const [show, setShow] = useState(false);
  const [bookdata, setbookdata] = useState({});
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const handleShow = (item) => {
    setShow(true);
    setbookdata(item);
  };
  const [limit, setLimit] = useState(8);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const addToCart = (item) => {
    Swal.fire({
      title: "Do you want to buy this book?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "ADDTOCART",
          newItem: item,
          quantity: 1,
        });
        setShow(false);
        Swal.fire("Buy!", "See in your cart.", "success");
      }
    });
  };
  return (
    <div className="product">
      <div className="container_big">
        <div>
          <h3 className="font-30 text-gr600 text-start ml-2 my-5 flex justify-content-left align-items-center">
            <FaBook className="mr-1" /> Sách
          </h3>
          <div className=" container grid grid-cols-1 md:grid-cols-4 gap-4">
            {books.map((item, index) => {
              return (
                index < limit && (
                  <div>
                    <Card className="card-product">
                      <NavLink to={`/product-detail/${item.id}`}>
                        <Card.Img
                          className="p-2"
                          variant="top"
                          src={item.imagePath}
                        />{" "}
                      </NavLink>
                      <div
                        className="product_links__subbutton"
                        onClick={() => {
                          handleShow(item);
                        }}
                      >
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                      </div>
                      <Card.Body className="card-product-body">
                        <p className="font-medium">{item.name}</p>
                        <p className="font-22 text-gr600 font-medium">
                          {item.price} đ
                        </p>
                      </Card.Body>
                      <Button
                        variant={item.inventory >= 1 ? "y600" : "secondary"}
                        className="w-100 btn-square font-11"
                        disabled={item.inventory >= 1 ? false : true}
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        {item.inventory >= 1 ? "Thêm vào giỏ hàng" : "Hết hàng"}
                      </Button>
                    </Card>
                  </div>
                )
              );
            })}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Button
              className="form-control w-25"
              variant="info"
              onClick={() => setLimit(limit + 8)}
            >
              Xem thêm
            </Button>
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
            <Image src={bookdata.imagePath} alt="banner" />
          </div>
          <div className="text-detail mt-5 ">
            <p className="font-22 font-medium">Truyện : Tư Phàm</p>
            <p className="font-30 text-gr600 font-medium">
              Giá : {bookdata.price} đ
            </p>
            <p className="text-g600 font-medium">
              {" "}
              Tác giả : {bookdata.authors?.name}
            </p>
            <p className="text-g600 mb-5">Nội dung : {bookdata.status} .</p>
            <h4 className="font-14 mt-5">Số Lượng: {bookdata.inventory}</h4>
            <div className="flex justify-between mt-3">
              <input
                className="ipw-120 height-44 text-center"
                type="text"
                id="fname"
                name="fname"
                placeholder={bookdata.inventory >= 1 ? 1 : 0}
              />
              <Button
                variant="y600"
                disabled={bookdata.inventory >= 1 ? false : true}
                onClick={() => {
                  addToCart(bookdata);
                }}
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
