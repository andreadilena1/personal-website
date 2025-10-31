package com.stage.myproject.backendwebpage.controller;


import com.stage.myproject.backendwebpage.model.EmailRequest;
import com.stage.myproject.backendwebpage.service.BackendWebPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class BackendWebPageController {

    @Autowired
    private BackendWebPageService emailService;

    @PostMapping("/email")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest request) {
        try {
            emailService.sendEmail(
                    request.getName(),
                    request.getEmail(),
                    "Risposta automatica dal sito web di Andrea Di Lena",
                    request.getMessage()
            );
            return ResponseEntity.ok("Email inviata con successo!");
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body("Errore: " + e.getMessage());
        }
    }
}