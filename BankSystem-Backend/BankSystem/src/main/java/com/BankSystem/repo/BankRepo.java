package com.BankSystem.repo;

import com.BankSystem.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankRepo extends JpaRepository<Bank,Long> {
}
