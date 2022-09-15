import React from "react";
import Navbar from "./Navbar";

export default function Terms() {
  return (
    <>
      <Navbar></Navbar> 
      <div className="container">     
      <h3 className="policy-header"><center><b>Policy & Terms</b></center></h3>
      <hr></hr>
        <ul>
        <li>
        India First bank has many customers with a Savings account with them.
        The customers can open a fixed deposit using the balance in their
        savings account.<u> <b>If they are in need of money they can open an Overdraft
        account against the FD balance.</b></u> The Overdraft is like a Savings account,
        where the initial balance is 80% of their FD amount.
         Eg: If Ed has an FD
        worth 100K in India First bank, <u><b>he can open an Overdraft account with
        80K balance (this is calculated by system and user cannot modify). Once
        OD is opened they cannot close the FD,</b> </u>since there is a hold in place
        for the FD. The OD is having an interest rate of FD rate plus 1%. If
        user has enough money in their savings account then the OD can be closed
        with that amount. Then the hold on FD will be removed and amount will be
        debited from their Savings account. Bank wants you to implement the
        following modules.
        </li>
        <li>
        SB account opening This module is used
        to register the customer with bank; also create a Savings account for
        them with the amount they pay at bank branch.<b> <u>This is done by bank
        officer. User Authentication Once SB account is created
        customers will get the userid and password from bank officer. </u></b>Customer
        can login to their account. 
        </li>
        <li>
         Deposit / withdrawal Bank officer can
        modify the balance of an SB account with the amount that a customer paid
        or withdrawn at the branch.<u><b> The customers are allowed to withdraw money
        from OD. But not deposit. Means once OD is opened they can withdraw
        money from it.</b></u>
        </li>
        <li>
          FD opening / closing Once customer logs into the system
        they get an option to open FD. The FD is opened using the SB balance and
        once opened the SB balance will be updated.<u><b> If they want to close FD,
        then there should not be any hold on FD (indicating an open OD against
        FD) Once FD closed balance will be credited to SB.OD opening /
        closing If customer has FD, </b></u>then they will get option to open an OD
        account. 
        </li>
        <li>
        Add a hold in FD. At this point the customer has three accounts
        with bank namely Savings account, FD with a hold, and OD. If they want
        to close the OD, <u><b>then they have to deposit the required money in their
        SB account at the bank. OD balance will be deducted from SB.</b></u> Once closed
        the customer will have SB and corresponding FD without a hold.
        </li>
        </ul>
      </div>
    </>
  );
}
