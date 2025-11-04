package com.stage.myproject.backendwebpage.controller;

/*
import com.stage.myproject.backendwebpage.model.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest emailRequest) {

        /*
        // Verifica se l'email o altri campi sono nulli
        if (emailRequest.getTo() == null || emailRequest.getTo().isEmpty()) {
            return ResponseEntity.badRequest().body("Email destinatario non valida.");
        }
        if (emailRequest.getSubject() == null || emailRequest.getSubject().isEmpty()) {
            return ResponseEntity.badRequest().body("Oggetto non valido.");
        }
        if (emailRequest.getBody() == null || emailRequest.getBody().isEmpty()) {
            return ResponseEntity.badRequest().body("Corpo del messaggio non valido.");
        }



        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(emailRequest.getName());
        message.setSubject(emailRequest.getEmail());
        message.setText(emailRequest.getMessage());
        message.setFrom("n_o_reply@libero.it");

        try {
            mailSender.send(message);
            return ResponseEntity.ok("Email inviata correttamente ✅");
        } catch (MailException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Errore nell'invio dell'email ❌");
        }
    }
}
*/