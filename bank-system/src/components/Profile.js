import React from "react";
import Navbar from "./Navbar";

export default function Profile(props) {
  console.log(props);
  return (
    <>
      <Navbar userData={props}></Navbar>
      <div className="container profile-container">
        <center>
          <table class="table table-hover">
            <tbody>
              <tr>
                <th colspan="2">
                  <center>Your Profile Details</center>
                </th>
              </tr>
              <tr>
                <th>Bank Account Number</th>
                <td>{props.getUserData.accountNumber}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{props.getUserData.user.name}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{props.getUserData.user.address}</td>
              </tr>
              <tr>
                <th>Saving Account Balance</th>
                <td>&#x20B9; {props.getUserData.balance} </td>
              </tr>
              <tr>
                <th> Fixed Deposit Balance</th>
                <td> 
                  {
                  props.getUserData.fdAmount === 0 ?
                     "NOT OPENED"  : 
                   <>&#x20B9; {props.getUserData.fdAmount} </>
                  }  </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{props.getUserData.user.email}</td>
              </tr>
              <tr>
                <th>Account Type</th>
                <td>{props.getUserData.accountType}</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}
