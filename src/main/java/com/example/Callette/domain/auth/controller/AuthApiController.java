package com.example.Callette.domain.auth.controller;

import com.example.Callette.domain.auth.dto.UserSignupRequest;
import com.example.Callette.domain.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthApiController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody UserSignupRequest request) {
        if (!request.getPassword().equals(request.getPassword2())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "passwords do not match"));
        }
        try {
            userService.create(
                    request.getUsername(),
                    request.getPassword(),
                    request.getNickname(),
                    request.getName(),
                    request.getBirthDate(),
                    request.getPhoneNumber(),
                    request.getEmail()
            );
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "user already exists"));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("signup failed" + e.getMessage());
        }
        return ResponseEntity.ok(Map.of("message", "signup successful"));
    }

    private ResponseEntity<?> checkDuplicate(boolean exists, String fieldName) {
        if (exists) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", fieldName + " already exists"));
        }

        return ResponseEntity.ok(fieldName + " successful");
    }

    @GetMapping("/check-username")
    public ResponseEntity<?> checkUsername(@RequestParam String username) {
        return checkDuplicate(userService.existsByUsername(username), "username");
    }

    @GetMapping("/check-nickname")
    public ResponseEntity<?> checkNickname(@RequestParam String nickname) {
        return checkDuplicate(userService.existsByNickname(nickname), "nickname");
    }

    @GetMapping("/check-phone")
    public ResponseEntity<?> checkPhoneNumber(@RequestParam String phoneNumber) {
        return checkDuplicate(userService.existsByPhoneNumber(phoneNumber), "phoneNumber");
    }

    @GetMapping("/check-email")
    public ResponseEntity<?> checkEmail(@RequestParam String email) {
        return checkDuplicate(userService.existsByEmail(email), "email");
    }
}