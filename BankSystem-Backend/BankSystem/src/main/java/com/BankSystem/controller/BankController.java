package com.BankSystem.controller;

import com.BankSystem.entity.Bank;
import com.BankSystem.entity.User;
import com.BankSystem.service.IBankService;
import com.BankSystem.service.IUserService;
import com.BankSystem.utils.UserConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/bank")
@CrossOrigin(origins = "http://localhost:3000")
public class BankController {
	Logger logger = LoggerFactory.getLogger(BankController.class);
	@Autowired
	private IBankService bankService;

	@Autowired
	private IUserService userService;

	@GetMapping("/account")
	public List<Bank> getAllBankAccountDetails(){
		logger.info("inside BankController in @getAllBankAccounts() method");
		return bankService.getBankAccountDetails();
	}

	@PostMapping("/account")
	public String createBankAccount(@RequestBody User user){
		logger.info("inside BankController in @createBankAccount() method ");
		if(userService.isUserExist(user.getEmail())){
			return UserConstants.USER_EXIST+user.getEmail();
		}
		String id = bankService.createUser(user);
		return UserConstants.ACCOUNT_CREATED +id;
	}

}
