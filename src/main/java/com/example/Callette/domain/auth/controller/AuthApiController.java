package com.example.Callette.domain.auth.controller;

import com.example.Callette.domain.auth.dto.UserSignupRequest;
import com.example.Callette.domain.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthApiController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody UserSignupRequest request, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMessages = new HashMap<>();
            bindingResult.getFieldErrors().forEach(error -> {
                errorMessages.put(error.getField(), error.getDefaultMessage());
            });

            return ResponseEntity.badRequest().body(errorMessages);
        }

        ResponseEntity<?> duplicateCheck = userService.checkDuplicate(request);
        if (duplicateCheck != null) return duplicateCheck;

        try {
            userService.create(request);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "회원가입 처리 중 오류 발생", "error", e.getMessage()));
        }
        return ResponseEntity.ok(Map.of("message", "환영합니다! 회원가입이 완료되었습니다."));
    }
}