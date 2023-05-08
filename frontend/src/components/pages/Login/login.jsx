import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
// import Alert from "../components/Helpers/Alert";
import { useNavigate } from "react-router-dom";
const handleLoginSubmit = () => {};

const Login = () => {
  const navigate = useNavigate();
  const showLoginContainer = true;
  const [alertCall, setAlertCall] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertDuration, setAlertDuration] = useState(0);
  const [alertSeverity, setAlertSeverity] = useState("sucess");
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  //   const handleAlertClose = (data) => {
  //     setAlertCall(data);
  //   };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8000/users/login", {
      email,
      password,
    });
    // console.log(response.data.token);
    localStorage.setItem("token", response.data.token);
    navigate("/");
  };
  return (
    <div>
      <section className="loginContainer">
        <div className="container">
          <div className="row">
            {/* header div */}
            <div className="col-md-12">
              <h1 className="headerContent">Green City Project</h1>
            </div>
            {showLoginContainer === true ? (
              <>
                {/* login div */}
                <div className="col-md-12">
                  <div className="formContent">
                    <h3 className="formHeader">Login</h3>
                    <form onSubmit={handleLoginSubmit}>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control emailInput"
                          placeholder="Enter your email"
                          required
                          aria-required="true"
                          onChange={emailHandler}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control emailInput"
                          placeholder="Enter your password"
                          required
                          aria-required="true"
                          onChange={passwordHandler}
                        />
                      </div>
                      {/* <Register /> */}
                      <button
                        type="submit"
                        className="btn_login"
                        onClick={submitHandler}
                      >
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
              // <StudentList />
            )}

            {/* footer div */}
            <div className="col-md-12">
              <div className="footerContent">
                <p>
                  <a
                    href="http://www.okcl.org/"
                    target="_blank"
                    className="footerLink"
                  >
                    OKCL
                  </a>
                  <span className="footerBorder">|</span>
                  <a
                    href="http://www.okcl.org/about/about-us"
                    className="footerLink"
                  >
                    About Us
                  </a>
                  <span className="footerBorder">|</span>
                  <a href="" className="footerLink">
                    Blog
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Alert
        msg={alertMessage}
        severity={alertSeverity}
        duration={alertDuration}
        open={alertCall}
        alertFunction={handleAlertClose}
      /> */}
    </div>
  );
};

export default Login;
