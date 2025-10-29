package com.stage.myproject.backendwebpage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class BackendWebPageService {

    @Autowired
    private JavaMailSender mailSender;

    @Async
    public void sendEmail(String fromName, String fromEmail, String subject, String message) {
        try {

        // -----------------------------
        // 1️⃣ Email al tuo indirizzo
        // -----------------------------

        SimpleMailMessage toMe  = new SimpleMailMessage();

        toMe.setFrom("n_o_reply@libero.it"); // Il tuo account Libero
        toMe.setTo("a.dilena@elitesoftwarehouse.com"); // Destinatario
        toMe.setSubject(subject);

        // Corpo del messaggio con info del mittente
        String fullMessage = String.format(
                "\nRisposta al messaggio del form di contatto del mio sito.\n\n" +
                        "Nome: %s\n" +
                        "Email: %s\n" +
                        "Messaggio: %s\n\n",
                fromName, fromEmail, message
        );

        toMe.setText(fullMessage);
        toMe.setReplyTo(fromEmail);
        mailSender.send(toMe);

        // -----------------------------
        // 2️⃣ Email al mittente (il visitatore)
        // -----------------------------

        SimpleMailMessage toSender = new SimpleMailMessage();
        toSender.setFrom("n_o_reply@libero.it");
        toSender.setTo(fromEmail);
        toSender.setSubject("Risposta automatica dal sito di Andrea Di Lena!");
        toSender.setText(String.format(
                "\n\nSalve %s,\n\nGrazie per averci contattato! \n\nAbbiamo ricevuto il suo messaggio e la risponderemo al più presto.\n\nCordiali Saluti.\n\n",
                fromName        ));

        toSender.setReplyTo("a.dilena@elitesoftwarehouse.com");
        mailSender.send(toSender);

        } catch (Exception e) {
            System.err.println("❌ Errore nell'invio email: " + e.getMessage());
        }
    }
}