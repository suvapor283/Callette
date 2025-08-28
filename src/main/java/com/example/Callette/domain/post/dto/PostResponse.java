package com.example.Callette.domain.post.dto;

import com.example.Callette.domain.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PostResponse {

    private Long id;
    private String title;
    private String content;
    private String date;
    private String visibility;

    public PostResponse(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.date = post.getDate().toString();
        this.visibility = post.getVisibility().name();
    }
}
