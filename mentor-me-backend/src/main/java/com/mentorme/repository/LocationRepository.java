package com.mentorme.repository;

import com.mentorme.model.Location;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LocationRepository extends MongoRepository<Location, String> {
    Location findByLocationName(String name);
}
