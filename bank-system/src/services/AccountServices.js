import React from 'react'
import axios from "axios";

const BANK_BASE_URL = `http://localhost:8080/bank`;
const USER_BASE_URL = `http://localhost:8080/user`;
class AccountServices extends React.Component{

    createBankAccount(user){
        return axios.post(`${BANK_BASE_URL}/account`,user);
    }

    userLogin(email,password){
        return axios.get(`${USER_BASE_URL}/login-user?email=${email}&password=${password}`);
    }

    depositAmount(balance,accountNumber){
        return axios.put(`${USER_BASE_URL}/deposit-amount?balance=${balance}&accountNumber=${accountNumber}`)
    }

    withdrawlAmount(balance,accountNumber){
        return axios.put(`${USER_BASE_URL}/withdrawl-amount?balance=${balance}&accountNumber=${accountNumber}`)
    }

    openFixedDepositAccount(balance,accountNumber){
        return axios.put(`${USER_BASE_URL}/fd-account?fixedDepositamount=${balance}&accountNumber=${accountNumber}`);
    }
}
export default new AccountServices()


