package com.example.Callette.domain.diary.service;

import com.example.Callette.domain.diary.dto.DiaryRequest;
import com.example.Callette.domain.diary.entity.Diary;
import com.example.Callette.domain.diary.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DiaryService {

    private final DiaryRepository diaryRepository;

    public ResponseEntity<?> create(DiaryRequest request, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMessages = new HashMap<>();
            bindingResult.getFieldErrors().forEach(error -> {
                errorMessages.put(error.getField(), error.getDefaultMessage());
            });

            return ResponseEntity.badRequest().body(errorMessages);
        }

        try {
            Diary diary = new Diary();
            diary.setTitle(request.getTitle());
            diary.setContent(request.getContent());
            diary.setDate(request.getDate());
            diary.setPublic(request.isPublic());

            diaryRepository.save(diary);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "다이어리를 저장하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."));
        }

        return ResponseEntity.ok(Map.of("message", "다이어리가 저장되었습니다."));
    }
}