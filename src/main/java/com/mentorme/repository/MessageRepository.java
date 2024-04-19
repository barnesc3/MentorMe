package com.mentorme.repository;

import com.mentorme.model.Message;
import com.mentorme.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findBySenderId(User senderId);
    List<Message> findByReceiverId(User receiverId);
}
