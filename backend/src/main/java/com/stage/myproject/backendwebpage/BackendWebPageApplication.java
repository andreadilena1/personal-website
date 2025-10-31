package com.stage.myproject.backendwebpage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class BackendWebPageApplication {

    public static void main(String[] args) {

        SpringApplication.run(BackendWebPageApplication.class, args);
    }

}
