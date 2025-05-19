package com.example.Callette.domain.diary.controller;

import com.example.Callette.domain.diary.dto.DiaryRequest;
import com.example.Callette.domain.diary.service.DiaryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/diary")
public class DiaryApiController {

    private final DiaryService diaryService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@Valid @RequestBody DiaryRequest request, BindingResult bindingResult) {
        return diaryService.create(request, bindingResult);
    }
}