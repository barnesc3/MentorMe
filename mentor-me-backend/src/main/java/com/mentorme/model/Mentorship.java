package com.mentorme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Mentorship {

    @Id
    private String id;
    @DBRef
    private User mentorId;
    @DBRef
    private Location locationId;
    private String description;

}
