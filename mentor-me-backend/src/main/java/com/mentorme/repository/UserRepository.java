package com.mentorme.repository;

import com.mentorme.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

    List<User> findByUsername(String username);
    List<User> findByAccountType(User.AccountType accountType);
    List<User> findByLocation(String location);
    List<User> findByEmail(String email);
    List<User> findByName(String fullName);

    List<User> findByBiographyContaining(String keyword);

    @Query("{'accountType': ?0, 'location.locationName': ?1}")
    List<User> findByAccountTypeAndLocationName(User.AccountType accountType, String locationName);

    Boolean existsByUsername(String username);

    @Query("{'location.name': ?0}")
    long countByLocationName(String locationName);
}
