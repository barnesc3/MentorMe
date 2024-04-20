package com.mentorme.repository;

import com.mentorme.model.SampleQuestion;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SampleQuestionRepository extends MongoRepository<SampleQuestion,String> {
    List<SampleQuestion> findByQuestionNumber(int number);
    List<SampleQuestion> findBySampleQuestionContaining(String keyword);

}
