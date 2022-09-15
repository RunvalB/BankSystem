import { React, useState } from "react";
import Navbar from "./Navbar";
import AccountServices from "../services/AccountServices";
import { useNavigate } from "react-router-dom";

export default function Deposit(props) {
  const navigate = useNavigate();
  const [depositAmount, setDepositAmount] = useState({
    balance: "",
    accountNumber: props.getUserData.accountNumber,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setDepositAmount({ ...depositAmount, [e.target.name]: value });
  };

  const finalDepositAmount = (e) => {
    e.preventDefault();
    console.log(depositAmount.accountNumber + " " + depositAmount.balance);
    AccountServices.depositAmount(
      depositAmount.balance,
      depositAmount.accountNumber
    )
      .then((response) => {
        if (response.status === 200) {
          alert(
            depositAmount.balance +
              " amount deposited in account " +
              depositAmount.accountNumber
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
          <center>Deposit Form</center>
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
            <input
              type="text"
              id="DepositInput"
              class="form-control"
              name="balance"
              onChange={(e) => handleChange(e)}
              placeholder="Enter Deposit Amount"
            />
          </div>
          <div class="d-grid gap-2 ">
            <button
              class="btn btn-primary"
              type="submit"
              onClick={finalDepositAmount}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
