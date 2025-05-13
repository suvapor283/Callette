package com.example.Callette.domain.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSignupRequest {

    @NotBlank
    @Pattern(regexp = "^[a-z0-9_-]{5,20}$")
    private String username;

    @NotBlank
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+=-]).{8,16}$")
    private String password;

    @NotBlank
    private String password2;

    @NotBlank
    private String nickname;

    @NotBlank
    @Pattern(regexp = "^[a-zA-Z가-힣]+$")
    private String name;

    @NotBlank
    @Pattern(regexp = "^\\d{8}$")
    private String birthDate;

    @NotBlank
    @Pattern(regexp = "^[0-9]{10,11}$")
    private String phoneNumber;

    private String email;
}