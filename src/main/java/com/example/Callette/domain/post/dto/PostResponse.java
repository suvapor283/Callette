package com.example.Callette.domain.post.dto;

import com.example.Callette.domain.post.entity.Post;
import com.example.Callette.global.enums.Visibility;
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
        this.visibility = convertVisibility(post.getVisibility());
    }

    private String convertVisibility(Visibility visibility) {
        return switch (visibility) {
            case PUBLIC -> "공개";
            case PRIVATE -> "비공개";
            case GROUP -> "그룹공개";
        };
    }
}
