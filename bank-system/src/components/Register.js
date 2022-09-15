import React, { useState } from "react";
import Navbar from "./Navbar";
import AccountServices from "../services/AccountServices";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
  console.log(props);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const createUser = (e) => {
    e.preventDefault();
    console.log(user);
    AccountServices.createBankAccount(user)
      .then((response) => {
        if (
          response.status === 200 &&
          response.data === "USER ALREADY EXIST WITH EMAIL " + user.email
        ) {
          alert(response.data);
          navigate("/register");
        } else if (response.status === 200) {
          alert(response.data);
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar userData ={props.userData}></Navbar>
      <div className="container mid-container">
        <h5 className="form-title bg-dark">
          <center>Registration Form</center>
        </h5>
        <form method="post" autoComplete="off">
          <div className="form-group">
          
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => handleChange(e)}
              required="required"
            ></input>
          </div>
          <br></br>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => handleChange(e)}
              required="required"
            ></input>
          </div>
          <br></br>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter Address"
              onChange={(e) => handleChange(e)}
              required="required"
            ></input>
          </div>
          <br></br>

          <div class="d-grid gap-2 ">
            <button class="btn btn-primary" type="submit" onClick={createUser}>
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
