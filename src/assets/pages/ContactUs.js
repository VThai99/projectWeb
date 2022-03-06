/** @format */

import React from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";

export default function ContactUs() {
  return (
    <div className="contact-page mb-5">
      <div className="container">
        <Breadcrumb className="px-0">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          Email : hoangthixuanquynh1209@gmail.com <br />
          Địa chỉ: 341 phố Vọng - Hai Bà Trưng- HN
        </div>

        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-12 md:col-span-10">
            <div>
              <p className="font-24 font-semibold">
                Bạn có câu hỏi về sản phẩm, công ty của chúng tôi hoặc chỉ muốn
                trò chuyện? Gửi email cho chúng tôi!
              </p>
              <p className="text-g200">
                Chúng tôi sẽ sẵn lòng hỗ trợ bạn trong bất kỳ câu hỏi nào và
                khuyến khích bạn để chia sẻ ý tưởng và cải tiến của bạn với
                chúng tôi.
              </p>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-16 font-bold">Tên</Form.Label>
                  <Form.Control type="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="font-16 font-bold">Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Label className="font-16 font-bold">
                  Nội dung tin nhắn
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  // style={{ height: "100px" }}
                  className=" min-height"
                />
              </Form>
              <Button variant="r200" className=" btw-130 mt-5">
                <p className="font-13">Gửi đánh giá </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
