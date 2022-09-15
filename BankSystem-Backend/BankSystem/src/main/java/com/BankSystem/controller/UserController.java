package com.BankSystem.controller;

import com.BankSystem.entity.AccountInfo;
import com.BankSystem.entity.Roles;
import com.BankSystem.entity.User;
import com.BankSystem.service.IAccountInfoService;
import com.BankSystem.service.IBankService;
import com.BankSystem.service.IUserService;
import com.BankSystem.utils.UserConstants;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {
    Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private IUserService userService;

    @Autowired
    private IBankService bankService;
    @Autowired
    private IAccountInfoService accountInfoService;

    @GetMapping("/login-user")
    public ResponseEntity<?> findUser(@RequestParam String email,@RequestParam String password){
        logger.info("inside Usercontroller in findUser() method");
        try{
            logger.info("inside UserController in @findUser() method try-block");
            User user = userService.findUser(email,password);
            if(user != null){
                  if(user.getRole().equals(Roles.BANK_OFFICER))
                  {
                     return ResponseEntity.ok(user);
                  }
                  logger.info("inside UserController in @findUser() method if-block");
                  AccountInfo accountInfo = accountInfoService.findByUser(user);
                  return  ResponseEntity.ok(accountInfo);
            }else{
                logger.info("inside UserController in @findUser() method else-block");
                return ResponseEntity.ok(UserConstants.USER_NOT_FOUND);
            }
        }catch(Exception e) {
            logger.info("inside UserController in @findUser() method catch block");
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @PutMapping("/deposit-amount")
    public ResponseEntity<?> depositAmount(@RequestParam Double balance , @RequestParam String accountNumber){
        logger.info("inside UserController in @depositAmount() method");
        Double updatedAmount = accountInfoService.depositAmount(balance,accountNumber);
         try{
             logger.info("inside UserController in @depositAmount() method try-block");
             return ResponseEntity.ok(updatedAmount);
         }catch(Exception e){
             logger.info("inside UserController in @depositAmount() method catch-block");
            return ResponseEntity.ok(e.getMessage());
         }
    }

    @PutMapping("/withdrawl-amount")
    public ResponseEntity<?> withdrawlAmount(@RequestParam Double balance , @RequestParam String accountNumber){
        logger.info("inside UserController in @withdrawlAmount() method");
        ResponseEntity<?> updatedAmount = accountInfoService.withdrawAmount(balance,accountNumber);
        try{
            logger.info("inside UserController in @withdrawlAmount() method try block");
            return ResponseEntity.ok(updatedAmount);
        }catch(Exception e){
            logger.info("inside UserController in @withdrawlAmount() method catch block");
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @PutMapping("/fd-account")
    public ResponseEntity<?> fdAccount(@RequestParam Double fixedDepositamount , @RequestParam String accountNumber){
        logger.info("inside UserController in @fdAccount() method try block");
        try{
            accountInfoService.openFixedDepositAccount(fixedDepositamount,accountNumber);
            return ResponseEntity.ok("FD Account() Created");
        }catch(Exception e){
            logger.info("inside UserController in @withdrawl() method catch block");
            return ResponseEntity.ok(e.getMessage());
        }
    }
}
