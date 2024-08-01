package TwitterAPI.twitterPage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TwitterAPI.twitterPage.model.Post;
import TwitterAPI.twitterPage.repository.PostRepository;
import jakarta.transaction.Transactional;

@Service
public class PostService {
    
    @Autowired
    private PostRepository postRepository;
    
    public  List<Post> getAllPosts() {
        return postRepository.findAll();
    }
    
@Transactional
    public Post create(Post post) {
        post.setId(null);
        return postRepository.save(post);
    }



}
