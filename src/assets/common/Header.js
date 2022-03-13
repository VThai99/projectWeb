/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Image, Nav } from "react-bootstrap";
import Logo from "../Images/logo.jpg";
import { FaUserAlt, FaShoppingCart, FaHome, FaBook } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import {
  useParams,
  lNavLink,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const count = useSelector((state) => state.numberCart);
  return (
    <div>
      <header className="page_container">
        <div className="header_row_1 row mx-0">
          <div className="col-4">
            {" "}
            <div className=" flex justify-start">
              {/* container */}
              <Nav variant="pills">
                <NavLink to="/" className="header_logo">
                  <Image src={Logo} alt="Shop Logo" />
                </NavLink>
                <Nav.Item>
                  <Link
                    to="/home"
                    className="flex justify-content-center align-items-center"
                  >
                    <FaHome className="mr-1" /> Home
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link
                    to="/Category"
                    className="flex justify-content-center align-items-center"
                  >
                    <FaBook className="mr-1" /> Thể Loại
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    to="/Author"
                    className="flex justify-content-center align-items-center"
                  >
                    <BsPersonLinesFill className="mr-1" /> Tác giả
                  </Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="flex justify-center col-4"></div>
          <div className="header_item_right col-4">
            <div>
              <NavLink to="/" className="header_search">
                <Link to="/account">
                  <FaUserAlt />
                </Link>
              </NavLink>

              <NavLink
                to="/cart"
                className="header_search"
                style={{ position: "relative" }}
              >
                <Link to="/Cart">
                  <FaShoppingCart />
                </Link>
                <span
                  style={{
                    position: "absolute",
                    right: "-25px",
                    top: "-10px",
                    borderRadius: "50%",
                    border: "1px solid red",
                    width: "25px",
                    height: "25px",
                    textAlign: "center",
                    background: "red",
                    cursor: "pointer",
                    fontSize: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "blue",
                  }}
                >
                  {count}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
