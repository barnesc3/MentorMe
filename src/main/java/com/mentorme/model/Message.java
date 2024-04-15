package com.mentorme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {

    @Id
    private String messageId;
    @DBRef
    private User senderId;
    @DBRef
    private User receiverId;
    private String content;
    private Instant timestamp;
}
