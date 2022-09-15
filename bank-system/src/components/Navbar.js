import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const clearProps = () => {
    alert("Logout Successfully....");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link to="/" class="navbar-brand me-2">
            <i class="fas fa-bank"></i>
            India First Bank
          </Link>
          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
            </ul>
            <div class="d-flex align-items-center">
              {props.userData === {} ||
              props.userData === undefined ||
              props === {} ? (
                <>
                  <Link to="/login">
                    <button type="button" class="btn btn-outline-light me-3">
                      <i class="fas fa-user"></i>Login
                    </button>
                  </Link>
                  <Link to="/terms">
                    <button type="button" class="btn btn-outline-light me-3 ">
                      <i class="fa-solid fa-file-contract"></i>Terms
                    </button>
                  </Link>
                </>
              ) : props.userData.role === "BANK_OFFICER" ? (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-light me-3  btn-secondary btn-md disabled"
                  >
                    <i class="fas fa-sign-out"></i>
                    {props.userData.name}
                  </button>

                  <Link to="/register">
                    <button type="button" class="btn btn-light me-3">
                      Register
                    </button>
                  </Link>

                  <Link to="/allUsers">
                    <button type="button" class="btn btn-outline-light me-3">
                        View Users
                      </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      class="btn btn-outline-light me-3 "
                      onClick={clearProps}
                    >
                      <i class="fas fa-sign-out"></i>
                      Logout
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/openfd">
                    <button type="button" class="btn btn-outline-light me-3 ">
                      <i class="fas fa-money-check-alt"></i>
                      Open FD
                    </button>
                  </Link>
                  <Link to="/deposit">
                    <button type="button" class="btn btn-outline-light me-3 ">
                      <i class="fas fa-donate"></i>
                      Deposit
                    </button>
                  </Link>
                  <Link to="/withdrawl">
                    <button type="button" class="btn btn-outline-light me-3 ">
                      <i class="fas fa-hand-holding"></i>
                      Withdrawl
                    </button>
                  </Link>
                  <Link to="/profile">
                    <button type="button" class="btn btn-outline-light me-3 ">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      Profile
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      class="btn btn-outline-light me-3 "
                      onClick={clearProps}
                    >
                      <i class="fas fa-sign-out"></i>
                      Logout
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
