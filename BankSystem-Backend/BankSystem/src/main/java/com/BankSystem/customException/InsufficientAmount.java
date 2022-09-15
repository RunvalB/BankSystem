package com.BankSystem.customException;

import org.springframework.http.HttpStatus;

public class InsufficientAmount extends RuntimeException{

    public InsufficientAmount(String insufficientAmount, HttpStatus notAcceptable) {
        super(insufficientAmount);
    }
}
