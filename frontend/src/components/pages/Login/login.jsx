import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const handleLoginSubmit = () => {};

const Login = () => {
  const navigate = useNavigate();
  const showLoginContainer = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const host=process.env.REACT_APP_HOST;

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${host}/users/login`, {
        email,
        password,
      });
      await localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (e) {
      console.error(e.response.data);
      return toast.error(e.response.data, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
                        Login Yourself
                      </button>
                    </form>
                    <Link to="/signup">
                      <button className="btn_login btn_register">
                        Want to Register ?
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
              // <StudentList />
            )}

            {/* footer div */}
            <div className="col-md-12"></div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
