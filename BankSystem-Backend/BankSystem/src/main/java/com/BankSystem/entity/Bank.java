package com.BankSystem.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Bank {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String bankName;

    private String bankAddress;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "bank_id")
    @JsonManagedReference
    private List<AccountInfo> accounts;

    public Bank(long l) {
        this.id= l;
    }
}
