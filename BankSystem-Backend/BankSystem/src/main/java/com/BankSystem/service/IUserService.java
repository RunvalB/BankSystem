package com.BankSystem.service;

import com.BankSystem.entity.User;

public interface IUserService {
    User findUser(String email, String password);
    void saveUser(User user);
    boolean isUserExist(String email);
}
