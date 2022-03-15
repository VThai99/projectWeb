/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./assets/common/ProductDetail";
import OrderSuccess from "./assets/components/OrderSuccess";
import Account from "./assets/pages/Account";
import Author from "./assets/pages/Author";
import Cart from "./assets/pages/Cart";
import Category from "./assets/pages/Category";
import ContactUs from "./assets/pages/ContactUs";
import Homepage from "./assets/pages/Homepage";
import Privacy from "./assets/pages/Privacy";
import MyOrder from "./assets/pages/MyOrder";
export default function Routes() {
  return (
    <div className="router">
      <Switch>
        <Route path="/Author">
          <Author />
        </Route>
        <Route path="/Category">
          <Category />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/my-order">
          <MyOrder />
        </Route>
        <Route path="/ordersuccess">
          <OrderSuccess />
        </Route>
        <Route path="/product-detail/:id">
          <ProductDetail />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>{" "}
        <Route path="/privacy-policy">
          <Privacy />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}
