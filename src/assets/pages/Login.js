import React, { useEffect, useState } from "react";
import "../scss/login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../services/auth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
export default function Login() {
  const history = useHistory();
  const [type, setType] = useState("login");
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
    reset
  } = useForm();
  useEffect(() => {
    const signupButton = document.getElementById("signup-button"),
      loginButton = document.getElementById("login-button"),
      userForms = document.getElementById("user_options-forms");
    signupButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceRight");
        userForms.classList.add("bounceLeft");
        setType('')
      },
      false
    );
    loginButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceLeft");
        userForms.classList.add("bounceRight");
        setType("login");
      },
      false
    );
  }, []);
  useEffect(() => {
    var auth = localStorage.getItem("access_token");
    if (auth) {
      history.push("/");
    }
  }, []);
  function handleLoginOrSubmit(data) {
    if (type == "login") {
      var dataLogin = {
        userName: data.userName,
        password: data.pass,
      };
      auth.login(dataLogin).then((res) => {
        if (res.status === 200) {
          localStorage.setItem("access_token", res.data.token);
          localStorage.setItem("user_name", res.data.userName);
          history.push("/");
        } else {
          Swal.fire("FAIl!", "SOME THING WRONG!", "warning");
        }
      });
    } else {
      var dataSignup = {
        name: data.name,
        phone: data.phone,
        address: data.address,
        email: data.email,
        username: data.userNameRegis,
        password: data.password,
      };
      auth.signup(dataSignup).then((res) => {
        Swal.fire("Good job!", "Create account success!", "success").then(
          (response) => {
            if (response) {
              const userForms = document.getElementById("user_options-forms");
              userForms.classList.remove("bounceLeft");
              userForms.classList.add("bounceRight");
              reset()
            }
          }
        );
      });
    }
  }
  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">
              Let's create a new account to get happy time with my website
            </p>
            <button className="user_unregistered-signup" id="signup-button">
              Sign up
            </button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">Let's login</p>
            <button className="user_registered-login" id="login-button">
              Login
            </button>
          </div>
        </div>
        <form
          className="forms_form"
          onSubmit={handleSubmit(handleLoginOrSubmit)}
        >
          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>

              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="UserName"
                    className="forms_field-input"
                    {...register("userName", {
                      required: {
                        value: type == "login" ? true : false,
                        message: "Please input your user name",
                      },
                    })}
                  />
                  {errors.userName && (
                    <p className="text-danger text-sm">
                      {errors.userName?.message}
                    </p>
                  )}
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    {...register("pass", {
                      required: {
                        value: type == "login" ? true : false,
                        message: "Please input your password",
                      },
                    })}
                  />
                  {errors.pass && (
                    <p className="text-danger text-sm">
                      {errors.pass?.message}
                    </p>
                  )}
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="submit" className="forms_buttons-action">
                  Log In
                </button>
              </div>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: {
                        value: type == "login" ? false : true,
                        message: "Please input your name",
                      },
                    })}
                    className="forms_field-input"
                  />
                  {errors.name && (
                    <p className="text-danger text-sm">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Username"
                    {...register("userNameRegis", {
                      required: {
                        value: type == "login" ? false : true,
                        message: "Please input your user name",
                      },
                    })}
                    className="forms_field-input"
                  />
                  {errors.userNameRegis && (
                    <p className="text-danger text-sm">
                      {errors.userNameRegis?.message}
                    </p>
                  )}
                </div>
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="forms_field-input"
                    {...register("phone", {
                      required: {
                        value: type == "login" ? false : true,
                        message: "Please input your phone",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-danger text-sm">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Address"
                    className="forms_field-input"
                    {...register("address", {
                      required: {
                        value: type == "login" ? false : true,
                        message: "Please input your address",
                      },
                    })}
                  />{" "}
                  {errors.address && (
                    <p className="text-danger text-sm">
                      {errors.address?.message}
                    </p>
                  )}
                </div>
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: type == "login" ? false : true,
                        message: "Please input your email",
                      },
                    })}
                    className="forms_field-input"
                  />
                  {errors.email && (
                    <p className="text-danger text-sm">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    {...register("password", {
                      required: {
                        value: type == "login" ? false : true,
                        message: "Please input your password",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger text-sm">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="submit" className="forms_buttons-action">
                  Sign Up
                </button>
              </div>
            </div>
          </div>{" "}
        </form>
      </div>
    </section>
  );
}
