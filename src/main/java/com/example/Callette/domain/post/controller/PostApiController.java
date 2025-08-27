package com.example.Callette.domain.post.controller;

import com.example.Callette.domain.post.entity.Post;
import com.example.Callette.domain.post.service.PostService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/posts")
public class PostApiController {

    private final PostService postService;

    @GetMapping("")
    public List<Post> getPosts() {
        return this.postService.getPosts();
    }

    @GetMapping("/{id}")
    public Post getPost(@PathVariable("id") Long id) {
        return this.postService.getPost(id);
    }
}
