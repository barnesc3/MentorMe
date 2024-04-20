package com.mentorme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents a geographic location stored in the MongoDB database.
 * Each location has a unique ID and a name.
 */
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {

    @Id
    private ObjectId locationId;
    private String locationName;
}
