package com.mentorme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private String id;

    private String username;
    private String password;
    private String email;
    private String fullName;
    @DBRef
    private Location location;
    private String biography;
    private String profilePicture;
    private AccountType accountType;

    public enum AccountType {
        MENTOR, MENTEE
    }

}
