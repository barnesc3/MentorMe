package com.mentorme.repository;

import com.mentorme.model.Evaluation;
import com.mentorme.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface EvalutationRepository extends MongoRepository<Evaluation, String> {
    List<Evaluation> findByMentorId(User mentorId);
    List<Evaluation> findByRaterId(User raterId);

    @Query("{'rating': ?0}")
    List<Evaluation> findByRating(int rating);

    @Query("{'rating': ?0}")
    long countByRating(int rating);
}
