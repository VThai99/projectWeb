import React from "react";
import { NavLink } from "react-router-dom";

import { Image, Nav } from "react-bootstrap";
import Logo from "../Images/logo.png";
export default function Header() {
  return (
    <div>
      <header className="page_container">
        <div className="header_row_1 row mx-0">
          <div className="col-4"></div>
          <div className="flex justify-center col-4">
            <NavLink to="/" className="header_logo">
              <Image src={Logo} alt="Shop Logo" />
            </NavLink>
          </div>
          <div className="header_item_right col-4">
            <div>
              <NavLink to="/" className="header_search">
                Search
              </NavLink>

              <NavLink to="/" className="header_search">
                Account
              </NavLink>

              <NavLink to="/cart" className="header_search">
                Cart
              </NavLink>
            </div>  
          </div>
        </div>
        <div className="header_row_2 flex justify-center items-center">
          <div className="container flex justify-center">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link href="/catalog">Điện thoại</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/laptop">Laptop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/clock">Đồng Hồ thông minh</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/accessory">Phụ kiện</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact-us" eventKey="contact">
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </header>
    </div>
  );
}
