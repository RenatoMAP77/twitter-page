package TwitterAPI.twitterPage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import TwitterAPI.twitterPage.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
    
}
