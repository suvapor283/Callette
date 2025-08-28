package com.example.Callette.domain.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class PostsResponse {

    private List<PostResponse> posts;
}
