import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { customer } from "../../services/customer";

export default function Account() {
  
  const nameOld = localStorage.getItem("user_name");
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
  } = useForm();
  const [userData, setUser] = useState({});
  const history = useHistory();
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    customer.getlist().then((res) => {
      for (const key in res.data) {
        if (res.data[key]?.username == nameOld) {
          var a = res.data[key];
        }
      }
      setUser(a);
    });
  }
  function handleLogOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_name");
    history.push("/login");
  }
  function onsubmit(data) {
    data.id = userData.id;
    data.password = userData.password;
    customer.update(data).then((res) => {
      if (res.status === 200) {
        Swal.fire("Done!", "Update success.", "success").then((response) => {
          if (response) {
            getUser();
          }
        });
      }
    });
  }

  return (
    <div className="cart-page">
      <div className="box-cart">
      <h3 className=" text-center pt-5">
            {" "}
           Tài khoản của tôi
          </h3>

        <div className="px-4 py-4">
          <Form className="" onSubmit={handleSubmit(onsubmit)}>
            {userData.name && (
              <Form.Group>
                <Form.Label className="fs-6 text-info">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className=""
                  {...register("name", {
                    value: userData.name,
                    required: true,
                  })}
                />
              </Form.Group>
            )}
            {userData.username && (
              <Form.Group controlId="UserName">
                <Form.Label  className="fs-6 text-info">UserName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="UserName"
                  className=""
                  {...register("username", {
                    value: userData.username,
                    required: true,
                  })}
                />
              </Form.Group>
            )}
            {userData.email && (
              <Form.Group controlId="email">
                <Form.Label className="fs-6 text-info">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  className=""
                  {...register("email", {
                    value: userData.email,
                    required: true,
                  })}
                />
              </Form.Group>
            )}
            {userData.phone && (
              <Form.Group controlId="phone">
                <Form.Label className="fs-6 text-info">Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  className=""
                  {...register("phone", {
                    value: userData.phone,
                    required: true,
                  })}
                />
              </Form.Group>
            )}
            {userData.address && (
              <Form.Group controlId="address">
                <Form.Label className="fs-6 text-info">Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  className=""
                  {...register("address", {
                    value: userData.address,
                  })}
                />
              </Form.Group>
            )}
            <div className="flex justify-content-around align-items-center m-3">
              <Button variant="outline-primary"  type="text" className="px-3">
               <Link to="/my-order"  style={{ color: "orange" }} >My order</Link> 
              </Button>
              <Button variant="outline-primary" type="submit" className="px-3">
                Update
              </Button>
              <Button
                variant="outline-danger"
                className="px-3"
                onClick={handleLogOut}
              >
                LogOut
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
