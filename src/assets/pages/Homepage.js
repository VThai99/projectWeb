/** @format */

import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { home } from "../../services/home";
import BannerHome from "../components/Homepage/BannerHome";
import BannerHomeTwo from "../components/Homepage/BannerHomeTwo";
import Product from "../components/Homepage/Product";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBook();
  }, []);
  function getBook() {
    home.getListBook().then((res) => {
      setBooks(res.data);
    });
  }
  return (
    <div className="homepage mb-5">
      <div className="banner_1">
        <BannerHome />
      </div>
      <div className="mt-5">
        <BannerHomeTwo />
      </div>

      <div className="mt-5">
        <Product books={books} />
      </div>
    </div>
  );
}
