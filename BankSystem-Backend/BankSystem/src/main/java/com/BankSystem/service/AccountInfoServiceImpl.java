package com.BankSystem.service;

import com.BankSystem.customException.InsufficientAmount;
import com.BankSystem.entity.AccountInfo;
import com.BankSystem.entity.AccountType;
import com.BankSystem.entity.User;
import com.BankSystem.repo.AccountRepo;
import com.BankSystem.utils.AccountConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AccountInfoServiceImpl implements  IAccountInfoService{

    Logger logger = LoggerFactory.getLogger(AccountInfoServiceImpl.class);
    @Autowired
    private AccountRepo accountRepo;

    @Override
    public void saveAccountInfo(AccountInfo accountInfo) {
        accountRepo.save(accountInfo);
    }

    @Override
    public ResponseEntity<?> withdrawAmount(double amount, String accountId) {
        logger.info("inside AccountInfoServiceImpl @SaveUser() method");
        AccountInfo accountInfo = accountRepo.findByAccountNumber(accountId);
        try {
            logger.info("inside AccountInfoServiceImpl @SaveUser() method try block");
            if (amount > accountInfo.getBalance()) {
                logger.info("inside AccountInfoServiceImpl @SaveUser() try if block");
                throw new InsufficientAmount(AccountConstants.INSUFFICIENT_AMOUNT, HttpStatus.NOT_ACCEPTABLE);
            }
            accountInfo.setBalance(accountInfo.getBalance() - amount);
            accountRepo.save(accountInfo);
            return ResponseEntity.ok(accountInfo.getBalance());
        } catch (InsufficientAmount e) {
            logger.info("inside AccountInfoServiceImpl @SaveUser() method catch block");
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    public double depositAmount(double amount,String accountId) {
        AccountInfo accountInfo = accountRepo.findByAccountNumber(accountId);
        accountInfo.setBalance(accountInfo.getBalance() + amount);
        accountRepo.save(accountInfo);
        return accountInfo.getBalance();
    }

    @Override
    public AccountInfo findByUser(User id) {
        return accountRepo.findByUser(id);
    }

    @Override
    public void openFixedDepositAccount(Double balance,String accountNumber) {
        AccountInfo accountInfo = accountRepo.findByAccountNumber(accountNumber);
        accountInfo.setAccountType(AccountType.SAVING_ACCOUNT);
        accountInfo.setFdAmount(balance);
        accountInfo.setBalance(accountInfo.getBalance() - balance);
        accountRepo.save(accountInfo);
    }
}
