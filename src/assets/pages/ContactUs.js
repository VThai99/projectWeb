import React from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import Map from "../common/Map";

export default function ContactUs() {
  return (
    <div className="contact-page mb-5">
      <div className="container">
        <Breadcrumb className="px-0">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <ul className="mb-4">
              <li className="font-16 font-semibold uppercase">
                CUSTOMER SERVICE
              </li>
              <li className="text-g200">09123 456 789</li>
              <li className="text-g200">Monday to Friday</li>
              <li className="text-g200">10am - 6.30pm (NewYork time)</li>
            </ul>
            <ul className="mb-4">
              <li className="font-16 font-semibold uppercase">
                PRODUCTS & ORDERS
              </li>
              <li className="text-g200">09123 456 789</li>
              <li className="text-g200">Monday to Friday</li>
              <li className="text-g200">10am - 6.30pm (NewYork time)</li>
            </ul>
            <ul className="mb-4">
              <li className="font-16 font-semibold uppercase">STORE LOCATOR</li>
              <li className="text-g200">521 Fifth Avenue, Pelham, NY 10783</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="google-map mb-5">
              <Map />
            </div>
            <div>
              <p className="font-24 font-semibold">
                Have a question about a product, our company, or just want to
                chat? Email us!
              </p>
              <p className="text-g200">
                We will be glad to assist you in any question and encourage you
                to share your ideas and improvements with us.
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-16 font-bold">Name</Form.Label>
                  <Form.Control type="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="font-16 font-bold">Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Label className="font-16 font-bold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  // style={{ height: "100px" }}
                  className=" min-height"
                />
              </Form>
              <Button
                variant="r200"
                className="btn-evaluate btn-square btw-130"
              >
                <p className="font-13">Gửi đánh giá </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
