package com.example.Callette.domain.auth.controller;

import com.example.Callette.domain.auth.dto.AuthLoginRequest;
import com.example.Callette.domain.auth.dto.AuthSignupRequest;
import com.example.Callette.domain.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthApiController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody AuthSignupRequest request, BindingResult bindingResult) {
        return authService.signup(request, bindingResult);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthLoginRequest request, BindingResult bindingResult) {
        return authService.login(request, bindingResult);
    }
}