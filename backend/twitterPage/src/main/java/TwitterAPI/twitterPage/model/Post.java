package TwitterAPI.twitterPage.model;

import java.time.LocalDateTime;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "posts")
@Entity(name = "posts")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "name")
    private String name;

    @Column(name = "verifier")
    private boolean verifier;

    @Column(name = "username")
    private String username;

    @Column(name = "time")
    private LocalDateTime time;

    @Column(name = "content")
    private String content;

    @Column(name = "image")
    private String image;

    @Column(name = "comments")
    private int comments;

    @Column(name = "retweets")
    private int retweets;

    @Column(name = "likes")
    private int likes;

    @Column(name = "views")
    private int views;

    @Column(name = "saved")
    private boolean saved;
    
}
