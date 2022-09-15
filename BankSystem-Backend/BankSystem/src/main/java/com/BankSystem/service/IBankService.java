package com.BankSystem.service;

import com.BankSystem.entity.Bank;
import com.BankSystem.entity.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBankService {
	public List<Bank> getBankAccountDetails();
    public String  createUser(User user);
}
