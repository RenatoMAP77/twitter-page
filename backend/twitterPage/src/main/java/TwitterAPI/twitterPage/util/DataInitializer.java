package TwitterAPI.twitterPage.util;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.Transactional;

import TwitterAPI.twitterPage.model.Post;
import TwitterAPI.twitterPage.repository.PostRepository;
import jakarta.annotation.PostConstruct;

@Configuration
public class DataInitializer {

    @Autowired
    PostRepository postRepository;

    @PostConstruct
    @Transactional
    public void init() {
        if (postRepository.count() > 5) {
            return;
        }
        postRepository.deleteAll();
        Post post1 = new Post(
                null,
                "https://s2.glbimg.com/96P5iqE9v1ZnbHjczxDfKykB-2Y=/143x0:804x707/661x707/middle/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/M/w/KC40aUTQ6W9e66beoBXQ/elon-musk-etienne-laurent-afp-13-de-abril-de-2024.jpg",
                "Elon Musk",
                true,
                "elonmusk",
                LocalDateTime.now(),
                "Dogecoin is the people’s crypto",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGntHHqFclT8bV5iA4tLmY8jjX19KZMxvhhw&s",
                100,
                100,
                100,
                100000000,
                false
        );
        Post post2 = new Post(
                null,
                "https://ep01.epimg.net/estaticos/arc/2021/02/entrevista/img/bill.jpg",
                "Bill Gates",
                true,
                "BillGatesTheBoss",
                LocalDateTime.now().minusHours(2),
                "Investing in renewable energy is the key to a sustainable future.",
                "https://sitesustentavel.com.br/wp-content/uploads/2019/05/sh_energia-eolica_759730900.jpg",
                200,
                150,
                300,
                50000000,
                false
        );
        Post post3 = new Post(
                null,
                "https://www.nasa.gov/wp-content/uploads/2023/05/nasa_meatball_1_2.jpeg?w=985",
                "NASA",
                true,
                "NASA",
                LocalDateTime.now().minusDays(1),
                "We’re going back to the Moon! 🌕 Our Artemis program will land the first woman and next man on the lunar surface.",
                "https://www.cnnbrasil.com.br/wp-content/uploads/2021/06/15195_BE224ECAF9290D4E.jpg",
                500,
                300,
                600,
                75000000,
                false
        );
        Post post4 = new Post(
                null,
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHJnKjrXndtCTVaBjImr8IxYOmZu-dPimow&s",
                "Satya Nadella",
                true,
                "satyanadella",
                LocalDateTime.now().minusHours(3),
                "Empowering others to achieve more through technology.",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvF1OndYsKmUX8a346f0Eigcia61F2IhkSA&s",
                350,
                250,
                400,
                60000000,
                true
        );
        Post post5 = new Post(
                null,
                 "https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=_XeYoSJQIN7GrE08cUQDJCo3U7yvoEp5OKpbhQzpmC0=",
                 "Roberto",
                 true,
                 "RobertoMingau",
                    LocalDateTime.now().minusHours(1),
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                 "https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=_XeYoSJQIN7GrE08cUQDJCo3U7yvoEp5OKpbhQzpmC0=",
                 5,
                 10,
                 15,
                 100,
                 true
        );

        postRepository.save(post1);
        postRepository.save(post2);
        postRepository.save(post3);
        postRepository.save(post4);
        postRepository.save(post5);

    }
}
