/** @format */

import React, { useState, useEffect } from "react";
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

import { CategoryService } from "../../services/CategoryService";
import { home } from "../../services/home";

export default function Category() {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [categoryActive, setCategoryActive] = useState([]);
  const [book, setBooks] = useState([]);
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);
  function getCategory() {
    CategoryService.getList().then((res) => {
      // console.log(res.data[0]);
      setCategory(res.data);
      setCategoryActive(res.data[0].name);
    });
  }
  useEffect(() => {
    if (categoryActive.length > 0) {
      getBook();
    }
  }, [categoryActive]);
  function getBook() {
    let a = [];
    home.getListBook().then((res) => {
      // console.log("categoryActive", categoryActive);
      // console.log(res.data);
      res.data.map((item) => {
        // console.log(item.types.length && item.types[0].name);
        if (item.types.length && item.types[0].name == categoryActive) {
          a.push(item);
        }
        // data.authors?.length && data.authors[0].name
      });
      // console.log(a);
      setData(a);
      setBooks(res.data);
    });
  }
  useEffect(() => {
    //  console.log(data, category);
  }, [data]);
  function handleMoveTab(e) {
  //  console.log("move", e);
    let a = category[e].name;
    // console.log(a)
    GetTabBook(a);
  }
  function GetTabBook(cate) {
    let a = [];
    // console.log(book);
    book.map((item) => {
      if (item.types.length && item.types[0].name == cate) {
        a.push(item);
      }
    });
    //console.log(a);
    setData(a);
  }
  // let active = [];
  // let items = [];
  // for (let number = 1; number <= 5; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>
  //   );
  // }
  return (
    <div>
      {category && data && (
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
                        {category?.map((cate, index) => {
                          return (
                            <Tab eventKey={index} title={cate.name} key={index}>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {data.map((item, i) => {
                                  return (
                                    <div>
                                      <Card className="card-product">
                                        <Link to={`/product-detail/${item.id}`}>
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
                                              Tác giả - {item.authors[0].name}
                                            </small>
                                          </p>
                                          <p className="font-22 text-gr600 font-medium">
                                            Giá :{item.price} đ
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
                                  );
                                })}
                              </div>
                            </Tab>
                          );
                        })}
                      </Tabs>
                    </div>

                    {/* <div className="flex justify-center mt-5">
                    <Pagination size="lg">{items}</Pagination>
                    </div> */}
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
