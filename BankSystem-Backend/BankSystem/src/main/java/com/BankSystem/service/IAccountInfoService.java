package com.BankSystem.service;

import com.BankSystem.entity.AccountInfo;
import com.BankSystem.entity.User;
import org.springframework.http.ResponseEntity;

public interface IAccountInfoService {
    void saveAccountInfo(AccountInfo accountInfo);
    ResponseEntity<?> withdrawAmount(double amount, String accountId);
    double depositAmount(double amount,String accountId);
    AccountInfo findByUser(User id);
    void openFixedDepositAccount(Double balance,String accountNumber);
}
