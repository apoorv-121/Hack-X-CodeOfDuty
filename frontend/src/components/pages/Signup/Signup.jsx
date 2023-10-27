import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleSignupSubmit = () => {};

const Signup = () => {
  const navigate = useNavigate();

  const showSignupContainer = true;

  const [user_name, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitSignupHandler = async (event) => {
    event.preventDefault();

    // checks
    if (
      user_name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return toast.error("All fields are mandatory !!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (password.length < 6) {
      return toast.error("Password must be of atleast 6 characters !!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (password !== confirmPassword) {
      return toast.error("Password must be same !!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const response = await axios.post("http://localhost:8000/users", {
      user_name,
      email,
      password,
    });

    await localStorage.setItem("token", response.data.token);
    navigate("/");
  };

  return (
    <div>
      <ToastContainer />
      <section className="signupContainer">
        <div className="container">
          <div className="row">
            {/* header div */}
            <div className="col-md-12">
              <h1 className="headerContent">Green City Project</h1>
            </div>
            {showSignupContainer === true ? (
              <>
                {/* signup div */}
                <div className="col-md-12">
                  <div className="formContent">
                    <h3 className="formHeader">Sign Up</h3>
                    <form onSubmit={handleSignupSubmit}>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="name"
                          name="name"
                          className="form-control emailInput"
                          placeholder="Enter your Full Name"
                          required
                          aria-required="true"

                          onChange={(e) => setUser_name(e.target.value)}
                        />
                      </div>
                      <br />

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control emailInput"
                          placeholder="Enter your email"
                          required
                          aria-required="true"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control emailInput"
                          placeholder="Create your Password"
                          required
                          aria-required="true"
                          // style={{background: "#03675f"}}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <br />
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control emailInput"
                          placeholder="Rewrite your Password"
                          required
                          aria-required="true"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      {/* <Register /> */}
                      <button
                        type="submit"
                        className="btn_login"
                        onClick={submitSignupHandler}
                      >
                        Register Yourself
                      </button>
                    </form>
                      <Link to="/auth">
                      <button className="btn_login btn_register">
                          Already registered ?
                      </button>
                      </Link>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
  
            )}

            {/* footer div */}
            <div className="col-md-12">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
