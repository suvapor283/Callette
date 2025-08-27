package com.example.Callette.domain.post.controller;

import com.example.Callette.domain.post.entity.Post;
import com.example.Callette.domain.post.service.PostService;
import com.example.Callette.global.RsData.RsData;
import lombok.RequiredArgsConstructor;
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
    public RsData<List<Post>> getPosts() {
        List<Post> posts = this.postService.getPosts();

        return RsData.of("S-1", "성공", posts);
    }

    @GetMapping("/{id}")
    public RsData<Post> getPost(@PathVariable("id") Long id) {
        return this.postService.getPost(id).map(post -> RsData.of(
                "S-1",
                "성공",
                post
        )).orElseGet(() -> RsData.of(
                "F-1",
                "%d번 게시물은 존재하지 않습니다.".formatted(id),
                null
        ));
    }
}
