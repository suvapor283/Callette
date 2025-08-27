package com.example.Callette.domain.post.service;

import com.example.Callette.domain.post.entity.Post;
import com.example.Callette.domain.post.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public List<Post> getPosts() {
        return this.postRepository.findAll();
    }

    public Post getPost(Long id) {
        Optional<Post> postOptional = this.postRepository.findById(id);

        return postOptional.orElseThrow(() -> new EntityNotFoundException("Post not fount"));
    }
}
