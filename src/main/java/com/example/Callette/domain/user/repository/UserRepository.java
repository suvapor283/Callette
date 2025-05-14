package com.example.Callette.domain.user.repository;

import com.example.Callette.domain.user.entity.SiteUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<SiteUser, Long> {

    Optional<SiteUser> findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByNickname(String nickname);

    boolean existsByPhoneNumber(String phoneNumber);

    boolean existsByEmail(String email);
}