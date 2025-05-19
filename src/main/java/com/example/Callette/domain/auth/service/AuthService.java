package com.example.Callette.domain.auth.service;

import com.example.Callette.domain.auth.dto.AuthLoginRequest;
import com.example.Callette.domain.auth.dto.AuthSignupRequest;
import com.example.Callette.domain.auth.jwt.JwtTokenProvider;
import com.example.Callette.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    public ResponseEntity<?> signup(AuthSignupRequest request, BindingResult bindingResult) {
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
                    .body(Map.of("message", "회원가입 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", "error", e.getMessage()));
        }
        return ResponseEntity.ok(Map.of("message", "환영합니다! 회원가입이 완료되었습니다."));
    }

    public ResponseEntity<?> login(AuthLoginRequest request, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMessages = new HashMap<>();
            bindingResult.getFieldErrors().forEach(error -> {
                errorMessages.put(error.getField(), error.getDefaultMessage());
            });

            return ResponseEntity.badRequest().body(errorMessages);
        }

        try {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());

            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            String jwt = jwtTokenProvider.generateToken(authentication);

            return ResponseEntity.ok(Map.of("token", jwt));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "아이디 또는 비밀번호를 확인하세요."));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "로그인 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", "error", e.getMessage()));
        }
    }
}