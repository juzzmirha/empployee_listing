package com.juzzmirha.fullstack.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not find by id"+ id);
    }
}
