import { React, useState } from "react";
import AccountServices from "../services/AccountServices";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function OpenFd(props) {
  const navigate = useNavigate();

  const [fdAccount, setFdAccount] = useState({
    balance: props.getUserData.balance,
    accountNumber: props.getUserData.accountNumber,
    fixedDepositamount:"",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFdAccount({ ...fdAccount, [e.target.name]: value });
  };

  const openFdAccount = (e) => {
    e.preventDefault();
    console.log(fdAccount);
    AccountServices.openFixedDepositAccount(
      fdAccount.fixedDepositamount,
      fdAccount.accountNumber
    )
      .then((response) => {
        if (response.status === 200) {
          alert(
            fdAccount.fixedDepositamount +
              " amount credited in FD account " +
              fdAccount.accountNumber
          );
          navigate("/profile");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Navbar userData={props}></Navbar>
      <div className="container mid-container">
        <h5 className="form-title bg-dark">
          <center>Open Fixed Deposit </center>
        </h5>
        <form>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">
              Account Number
            </label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              name="accountNumber"
              onChange={(e) => handleChange(e)}
              value={props.getUserData.accountNumber}
              disabled
            />
          </div>

          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">
              Account Balance
            </label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              name="balance"
              onChange={(e) => handleChange(e)}
              value={props.getUserData.balance}
              disabled
            />
          </div>

          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">
              Fixed Deposit Amount
            </label>
            <input
              type="text"
              id="fdamount"
              class="form-control"
              name="fixedDepositamount"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div class="d-grid gap-2 ">
            <button
              class="btn btn-primary"
              type="submit"
              onClick={openFdAccount}
            >
              Open FD
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
