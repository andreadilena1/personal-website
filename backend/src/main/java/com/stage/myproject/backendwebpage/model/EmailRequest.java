package com.stage.myproject.backendwebpage.model;

import lombok.Data;


public class EmailRequest {
    private String name;
    private String email;
    private String message;
    private boolean acceptPrivacy;

    public void setName(String name) {
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getEmail(){

        return email;
    }

    public void setMessage(String message) {
        this.message = message;

    }

    public String getMessage(){
        return message;
    }

    public void setAcceptPrivacy(boolean acceptPrivacy) {
        this.acceptPrivacy = acceptPrivacy;
    }

    public boolean getAcceptPrivacy(){
        return acceptPrivacy;
    }

}
