import React from "react";
import { Breadcrumb } from "react-bootstrap";
import ListProduct from "../common/ListProduct";

export default function Catalog() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="catalog-page">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

          <Breadcrumb.Item active>Điện thoại</Breadcrumb.Item>
        </Breadcrumb>

        <div className="mt-5">
          <ListProduct />
        </div>
      </div>
    </div>
  );
}
