import React, { useState } from "react";
import Navbar from "./Navbar";
import AccountServices from "../services/AccountServices";
import { useNavigate } from "react-router-dom";

export default function UserLogin(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(user);
    AccountServices.userLogin(user.email,user.password)
      .then((response) => {
        if (
          response.status === 200 &&
          response.data === "USER NOT FOUND" 
        ) {
          alert(response.data);
          user.email = "";
          user.password = "";
          navigate("/login");
        } else if (response.status === 200) {
         alert("Login Successful")
          console.log(response.data);
          props.onSubmit(response.data);
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container mid-container">
        <h5 className="form-title bg-dark">
          <center>Login</center>
        </h5>
        <form method="post" autoComplete="off">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              placeholder="Enter Email"
              onChange={(e) => handleChange(e)}
              required="required"
            ></input>
          </div>
          <br></br>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              placeholder="Enter Password"
              onChange={(e) => handleChange(e)}
              required="required"
            ></input>
          </div>
          <br></br>

          <div class="d-grid gap-2 ">
            <button class="btn btn-primary" type="submit" onClick={login}>
              Submit
            </button>
            <button class="btn btn-secondary" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
