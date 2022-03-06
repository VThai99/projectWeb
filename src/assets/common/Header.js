/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Image, Nav } from "react-bootstrap";
import Logo from "../Images/logo.jpg";
import {
  useParams,
  lNavLink,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
export default function Header() {
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
                  <Link to="/home">Home</Link>
                </Nav.Item>

                <Nav.Item>
                  <Link to="/Category">Thể Loại</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/Author">Author</Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="flex justify-center col-4"></div>
          <div className="header_item_right col-4">
            <div>
              <NavLink to="/" className="header_search">
                <Link to="/Search">Search</Link>
              </NavLink>

              <NavLink to="/" className="header_search">
                <Link to="/Account">Account</Link>
              </NavLink>

              <NavLink to="/cart" className="header_search">
                <Link to="/Cart">Cart</Link>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
