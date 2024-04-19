package com.mentorme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Evaluation {
    @Id
    private ObjectId evaluationId;
    @DBRef
    private User mentorId;
    @DBRef
    private User raterId;
    private int rating;
    private String feedback;
    private Instant timestamp;

}
