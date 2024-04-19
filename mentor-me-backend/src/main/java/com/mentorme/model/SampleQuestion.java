package com.mentorme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SampleQuestion {
    @Id
    private String questionId;
    private int questionNumber;
    private String sampleQuestion;
}
