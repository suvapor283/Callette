package com.example.Callette;

import com.example.Callette.domain.post.entity.Post;
import com.example.Callette.domain.post.repository.PostRepository;
import com.example.Callette.global.enums.Visibility;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
class CalletteApplicationTests {

	@Autowired
	private PostRepository postRepository;

	@Test
	void PostTest() {
		Post post = new Post();
		post.setTitle("테스트제목");
		post.setContent("테스트 내용");
		post.setDate(LocalDate.now());
		post.setVisibility(Visibility.PUBLIC);

		postRepository.save(post);
	}
}
