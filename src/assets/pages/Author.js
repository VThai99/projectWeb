/** @format */

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card, Tab,
  Tabs
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthorService } from "../../services/AuthorService";
import { home } from "../../services/home";
import PaginationSection from "../common/PaginationSection";

export default function Author() {
  const dispatch = useDispatch();
  const [authorData, setAuthor] = useState([]);
  const [data, setData] = useState([]);
  const [authorActive, setAuthorActive] = useState([]);
  const [book, setBooks] = useState([]);
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const [Page, setPage] = useState({
    number: 1,
    size: 9,
    totalElements: 10,
  });
  useEffect(() => {
    getCategory();
  }, []);
  function getCategory() {
    AuthorService.getList().then((res) => {
      setAuthor(res.data);
      setAuthorActive(res.data[0].name);
    });
  }
  useEffect(() => {
    if (authorActive.length > 0) {
      getBook();
    }
  }, [authorActive]);
  function getBook() {
    let a = [];
    home.getListBook().then((res) => {
      res.data.map((item) => {
        if (item.types.length && item.authors[0]?.name == authorActive) {
          a.push(item);
        }
      });

      setPage({
        ...Page,
        number: 1,
        size: 9,
        totalElements: a.length,
      });
      setData(a);
      setBooks(res.data);
    });
  }
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
        Swal.fire("Buy!", "See in your cart.", "success");
      }
    });
  };
  function handleMoveTab(e) {
    let a = authorData[e].name;
    GetTabBook(a);
  }
  function GetTabBook(e) {
    let a = [];
    book.map((item) => {
      if (item.authors.length && item.authors[0].name == e) {
        a.push(item);
      }
    });
    setPage({
      ...Page,
      number: 1,
      size: 9,
      totalElements: a.length,
    });
    setData(a);
  }
  function handlePaging(number) {
    setPage({
      ...Page,
      number: number,
    });
  }

  return (
    <div>
      {authorData && data && (
        <>
          <div className="catalog-page">
            <div className="container">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

                <Breadcrumb.Item active>Thể loại</Breadcrumb.Item>
              </Breadcrumb>

              <div className="mt-5 mb-5">
                <div className="list-product">
                  <div className="container_big">
                    <div className="tab-choose ">
                      <Tabs
                        defaultActiveKey={0}
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-5"
                        onSelect={(e) => handleMoveTab(e)}
                      >
                        {authorData?.map((cate, index) => {
                          return (
                            <Tab eventKey={index} title={cate.name} key={index}>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {data.map((item, i) => {
                                  return (
                                    <div>
                                      {(Page.number - 1) * Page.size <= i &&
                                        i < Page.number * Page.size && (
                                          <>
                                            {" "}
                                            <Card className="card-product">
                                              <Link
                                                to={`/product-detail/${item.id}`}
                                              >
                                                <Card.Img
                                                  className="p-2 "
                                                  variant="top"
                                                  src={item.imagePath}
                                                />
                                              </Link>

                                              <Card.Body className="card-product-body pt-2">
                                                <p className="font-medium mb-0">
                                                  {item.name}
                                                </p>
                                                <p className="font-medium  mb-0">
                                                  <small>
                                                    Tác giả -{" "}
                                                    {item.authors[0]?.name}
                                                  </small>
                                                </p>
                                                <p className="font-22 text-gr600 font-medium">
                                                  Giá :{item.price} đ
                                                </p>
                                              </Card.Body>
                                              <Button
                                                variant={
                                                  item.inventory >= 1
                                                    ? "y600"
                                                    : "secondary"
                                                }
                                                className="w-100 btn-square font-11"
                                                disabled={
                                                  item.inventory >= 1
                                                    ? false
                                                    : true
                                                }
                                                onClick={() => {
                                                  addToCart(item);
                                                }}
                                              >
                                                {item.inventory >= 1
                                                  ? "Thêm vào giỏ hàng"
                                                  : "Hết hàng"}
                                              </Button>
                                            </Card>
                                          </>
                                        )}
                                    </div>
                                  );
                                })}
                              </div>
                            </Tab>
                          );
                        })}
                      </Tabs>
                    </div>

                    <div className="flex justify-center mt-5">
                      <PaginationSection
                        size={Page.size}
                        number={Page.number}
                        totalElements={Page.totalElements}
                        handlePaging={handlePaging}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
