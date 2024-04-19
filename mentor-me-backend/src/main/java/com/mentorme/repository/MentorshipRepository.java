package com.mentorme.repository;

import com.mentorme.model.Location;
import com.mentorme.model.Mentorship;
import com.mentorme.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MentorshipRepository extends MongoRepository<Mentorship, String> {
    List<Mentorship> findByMentorId(User mentorId);
    List<Mentorship> findByLocationId(Location locationId);

}
