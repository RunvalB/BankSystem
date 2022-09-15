package com.BankSystem.repo;

import com.BankSystem.entity.AccountInfo;
import com.BankSystem.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepo extends JpaRepository<AccountInfo,Long> {
    AccountInfo findByUser(User id);
    AccountInfo findByAccountNumber(String accountId);
}
