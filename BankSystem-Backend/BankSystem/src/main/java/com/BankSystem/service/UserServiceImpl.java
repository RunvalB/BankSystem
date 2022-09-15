package com.BankSystem.service;

import com.BankSystem.entity.User;
import com.BankSystem.repo.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
    private UserRepo userRepo;
    @Override
    public User findUser(String email, String password) {
        logger.info("inside UserServiceImpl @findUser() method");
        return userRepo.findByEmailAndPassword(email,password);
    }

    @Override
    public void saveUser(User user) {
        logger.info("inside UserServiceImpl @SaveUser() method");
        userRepo.save(user);
    }

    @Override
    public boolean isUserExist(String email) {
        logger.info("inside UserServiceImpl @isUserExist() method");
         User user = userRepo.findUserByEmail(email);
         if(user!=null){
             return true;
         }
         return false;
    }
}
