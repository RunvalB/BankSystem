package com.BankSystem.repo;

import com.BankSystem.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepo extends JpaRepository<User, Long>{

    User findByEmailAndPassword(String email, String password);

    User findUserByEmail(String email);
}
