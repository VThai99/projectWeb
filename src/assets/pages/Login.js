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
      localStorage.setItem("access_token", res.data.token);
      history.push("/");
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
    <section class="user">
      <div class="user_options-container">
        <div class="user_options-text">
          <div class="user_options-unregistered">
            <h2 class="user_unregistered-title">Don't have an account?</h2>
            <p class="user_unregistered-text">
              Let's create a new account to get happy time with my website
            </p>
            <button class="user_unregistered-signup" id="signup-button">
              Sign up
            </button>
          </div>

          <div class="user_options-registered">
            <h2 class="user_registered-title">Have an account?</h2>
            <p class="user_registered-text">Let's login</p>
            <button class="user_registered-login" id="login-button">
              Login
            </button>
          </div>
        </div>

        <div class="user_options-forms" id="user_options-forms">
          <div class="user_forms-login">
            <h2 class="forms_title">Login</h2>
            <form class="forms_form">
              <fieldset class="forms_fieldset">
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="UserName"
                    class="forms_field-input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    autofocus
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    class="forms_field-input"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                </div>
              </fieldset>
            </form>
            <div class="forms_buttons">
              <button onClick={handleLogin} class="forms_buttons-action">
                Log In
              </button>
            </div>
          </div>
          <div class="user_forms-signup">
            <h2 class="forms_title">Sign Up</h2>
            <form class="forms_form">
              <fieldset class="forms_fieldset">
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="forms_field-input"
                    required
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="Username"
                    value={userNameRegis}
                    onChange={(e) => setUserNameRegis(e.target.value)}
                    class="forms_field-input"
                    required
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="forms_field-input"
                    required
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    class="forms_field-input"
                    required
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="forms_field-input"
                    required
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    class="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
            </form>{" "}
            <div class="forms_buttons">
              <button onClick={handleSignUp} class="forms_buttons-action">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
