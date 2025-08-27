package com.example.Callette;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CalletteApplication {

    public static void main(String[] args) {
        SpringApplication.run(CalletteApplication.class, args);
    }
}
