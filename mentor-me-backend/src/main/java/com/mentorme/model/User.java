package com.mentorme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private ObjectId id;

    private String username;
    private String password;
    private String email;
    private String fullName;
    private String location;
    private String biography;
    private String profilePicture;
    private AccountType accountType;

    public enum AccountType {
        MENTOR, MENTEE
    }

}
