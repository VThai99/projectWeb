import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./assets/common/ProductDetail";
import Demo from "./assets/components/Demo";
import OrderSuccess from "./assets/components/OrderSuccess";
import Accessory from "./assets/pages/Accessory";
import Clock from "./assets/pages/Author";
import Cart from "./assets/pages/Cart";
import Catalog from "./assets/pages/Catalog";
import Category from "./assets/pages/Category";
import ContactUs from "./assets/pages/ContactUs";
import Homepage from "./assets/pages/Homepage";
import Privacy from "./assets/pages/Privacy";
export default function Routes() {
  return (
    <div className="router">
      <Switch>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/accessory">
          <Accessory />
        </Route>
        <Route path="/Author">
          <Clock />
        </Route>
        <Route path="/Category">
          <Category />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/ordersuccess">
          <OrderSuccess />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/product-detail">
          <ProductDetail />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>{" "}
        <Route path="/privacy-policy">
          <Privacy />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}
