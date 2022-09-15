package com.BankSystem.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class AccountInfo {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String accountNumber;
    private Double balance;
    @Enumerated(EnumType.STRING)
    private AccountType accountType;

    private Double fdAmount;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public AccountInfo(String s, double v, AccountType savingAccount,Double fdAmount ,User user) {
        this.accountNumber = s;
        this.balance = v;
        this.accountType=savingAccount;
        this.user = user;
        this.fdAmount = fdAmount;
    }

    @ManyToOne
    @JsonBackReference
    @NonNull
    private Bank bank;
}
