package com.example.Callette.domain.user.service;

import com.example.Callette.domain.user.entity.SiteUser;
import com.example.Callette.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public SiteUser create(String username, String password, String nickname, String name, String birthDate, String phoneNumber, String email) {
        SiteUser user = new SiteUser();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setNickname(nickname);
        user.setName(name);
        user.setBirthDate(birthDate);
        user.setPhoneNumber(phoneNumber);
        user.setEmail(email);

        return this.userRepository.save(user);
    }

    public boolean existsByUsername(String username){
        return this.userRepository.existsByUsername(username);
    }

    public boolean existsByNickname(String nickname){
        return this.userRepository.existsByNickname(nickname);
    }

    public boolean existsByPhoneNumber(String phoneNumber){
        return this.userRepository.existsByPhoneNumber(phoneNumber);
    }

    public boolean existsByEmail(String email){
        return this.userRepository.existsByEmail(email);
    }
}