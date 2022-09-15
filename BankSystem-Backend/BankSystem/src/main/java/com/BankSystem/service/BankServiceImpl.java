package com.BankSystem.service;

import com.BankSystem.entity.*;
import com.BankSystem.repo.AccountRepo;
import com.BankSystem.repo.BankRepo;
import com.BankSystem.repo.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankServiceImpl implements IBankService{
	Logger logger = LoggerFactory.getLogger(BankServiceImpl.class);
	@Autowired
	private AccountRepo accountRepo;
	@Autowired
	private BankRepo bankRepo;
	@Autowired
	private UserRepo userRepo;
	@Override
	public List<Bank> getBankAccountDetails() {
		return bankRepo.findAll();
	}

	@Override
	public String createUser(User user) {
		logger.info("inside BankServiceImpl @createUser() method");
		user.setRole(Roles.USER);
		userRepo.save(user);
		String id = "HDFC-"+Integer.valueOf((int) Math.floor(100000 + Math.random() * 900000));
		AccountInfo accountInfo = new AccountInfo(id,0d, AccountType.SAVING_ACCOUNT,0d,user);
		accountInfo.setBank(new Bank(1001L));
		accountRepo.save(accountInfo);
		return id;
	}
}
