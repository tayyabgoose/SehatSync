import React from "react";
import "./App.css";
import "./form.css";
import icon from "./assets/Logo.svg";
import apple from "./assets/apple.svg";
import fb from "./assets/fb.svg";
import google from "./assets/google.svg";
import passcode from "./assets/Passcode.svg";
import mail from "./assets/mail.svg";

export function Nav_Bar() {
  return (
    <>
      <div className="nav">
        <div className="navbar">
          <div className="logo_cont">
            <img src={icon}></img>
            <span className="logo">
              Sehat<span className="lasthalf">Sync</span>
            </span>
          </div>

          <div className="mid-container">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </>
  );
}

export function Big_text() {
  return (
    <>
      <div className="t1">
        <div className="big_text">
          <div>Make Your</div>
          <div>
            <span>SehatSync</span>Account
          </div>
        </div>
        <div className="small_text">
          Your path to easier health management!{" "}
        </div>
      </div>
    </>
  );
}

export function SignInForm() {
  return (
    <>
      <div className="main_container">
        <div className="Whole_cont">
          <Big_text />
          <form>
            <fieldset>
              <div className="cont">
                <label for="Email">Email</label>
                <div className="input_fields">
                  <img src={mail} />
                  <input type="email" placeholder="karam@sehatsync.com" />
                </div>
              </div>

              <div className="m1_cont">
                <label for="Password">Enter Password</label>
                <div className="input_fields">
                  <img src={passcode} />
                  <input type="password" placeholder="********" />
                </div>
                <div className="sub_t">
                  The password must be 8-16 characters long, with at least one
                  special character and number.
                </div>
              </div>

              <div className="cont">
                <label for="Confirm Password">Confirm Password</label>
                <div className="input_fields">
                  <img src={passcode} />
                  <input type="password" placeholder="********" />
                </div>
              </div>

              <div className="main_text">
                Don't have an account?
                <span className="subtext">
                  <a href="#">Login</a>
                </span>
                instead.
              </div>
              <button type="submit" className="btn_sign_up">
                Sign Up
              </button>

              <div className="t2">Use Social Login</div>
              <div className="social">
                <button type="button" id="google">
                  <a href="">
                    <img src={google} />
                  </a>
                </button>
                <button type="button" id="fb">
                  <a href="">
                    <img src={fb} />
                  </a>
                </button>
                <button type="button" id="apple">
                  <a href="">
                    <img src={apple} />
                  </a>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
