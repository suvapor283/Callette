package com.example.Callette.domain.user.service;

import com.example.Callette.domain.auth.dto.UserSignupRequest;
import com.example.Callette.domain.user.entity.SiteUser;
import com.example.Callette.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public SiteUser create(UserSignupRequest request) {
        SiteUser user = new SiteUser();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setNickname(request.getNickname());
        user.setName(request.getName());
        user.setBirthDate(request.getBirthDate());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setEmail(request.getEmail());

        return this.userRepository.save(user);
    }

    public ResponseEntity<?> checkDuplicate(UserSignupRequest request) {
        Map<String, String> errorMessages = new HashMap<>();

        if (userRepository.existsByUsername(request.getUsername())) {
            errorMessages.put("username", "이미 사용 중인 아이디입니다");
        }
        if (userRepository.existsByNickname(request.getNickname())) {
            errorMessages.put("nickname", "이미 사용 중인 닉네임입니다");
        }
        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            errorMessages.put("phoneNumber", "이미 등록된 휴대폰 번호입니다");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            errorMessages.put("email", "이미 등록된 이메일입니다");
        }

        if (!errorMessages.isEmpty()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorMessages);
        }

        return null;
    }
}