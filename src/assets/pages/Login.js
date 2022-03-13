import React, { useEffect, useState } from "react";
import "../scss/login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../services/auth";
import Swal from "sweetalert2";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [userNameRegis, setUserNameRegis] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    const signupButton = document.getElementById("signup-button"),
      loginButton = document.getElementById("login-button"),
      userForms = document.getElementById("user_options-forms");
    signupButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceRight");
        userForms.classList.add("bounceLeft");
      },
      false
    );
    loginButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceLeft");
        userForms.classList.add("bounceRight");
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
  function handleLogin() {
    var dataLogin = {
      userName: userName,
      password: pass,
    };
    auth.login(dataLogin).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.token);
        localStorage.setItem("user_name", res.data.userName)
        history.push("/");
      }
      else{
        Swal.fire("FAIl!", "SOME THING WRONG!", "warning");
      }
    });
  }
  function handleSignUp() {
    var dataSignup = {
      name: name,
      phone: phone,
      address: address,
      email: email,
      username: userNameRegis,
      password: password,
    };
    auth.signup(dataSignup).then((res) => {
      Swal.fire("Good job!", "Create account success!", "success");
    });
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

        <div className="user_options-forms" id="user_options-forms">
          <div className="user_forms-login">
            <h2 className="forms_title">Login</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="UserName"
                    className="forms_field-input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    autofocus
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                </div>
              </fieldset>
            </form>
            <div className="forms_buttons">
              <button onClick={handleLogin} className="forms_buttons-action">
                Log In
              </button>
            </div>
          </div>
          <div className="user_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Username"
                    value={userNameRegis}
                    onChange={(e) => setUserNameRegis(e.target.value)}
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
            </form>{" "}
            <div className="forms_buttons">
              <button onClick={handleSignUp} className="forms_buttons-action">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
