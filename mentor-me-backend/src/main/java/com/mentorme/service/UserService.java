package com.mentorme.service;

import com.mentorme.model.Location;
import com.mentorme.model.Mentorship;
import com.mentorme.model.User;
import com.mentorme.repository.LocationRepository;
import com.mentorme.repository.MentorshipRepository;
import com.mentorme.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;



/**
 * Handles User-related operations
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MentorshipRepository mentorshipRepository;
    @Autowired
    private LocationRepository locationRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void registerUser(User user) {
        // Check if username is already taken
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username is already taken.");
        }

        // Check if location string is provided
        String locationName = user.getLocation();
        if (locationName == null || locationName.isEmpty()) {
            throw new IllegalArgumentException("Location is required.");
        }

        // Find the location in the database or save it if it doesn't exist
        Location existingLocation = locationRepository.findByLocationName(locationName);
        if (existingLocation == null) {
            Location newLocation = new Location();
            newLocation.setLocationName(locationName);
            existingLocation = locationRepository.save(newLocation);
        }

        // Hash and set the password
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        // Set the location string for the user
        user.setLocation(locationName);

        // Save the user
        userRepository.save(user);

        if (user.getAccountType() == User.AccountType.MENTOR) {
            // Create and save the Mentorship entity
            Mentorship mentorship = new Mentorship();
            mentorship.setMentorId(user);
            mentorship.setDescription(user.getBiography());
            // Assuming Mentorship uses a Location entity reference
            mentorship.setLocationId(existingLocation);
            mentorshipRepository.save(mentorship);
        }
    }


    @Transactional
    public void updateProfile(String username, User updatedUser){
        List<User> userList = userRepository.findByUsername(username);
        if(!userList.isEmpty()){
            User user = userList.get(0);

            if(userRepository.existsByUsername(user.getUsername())){
                String errorMessage = "Username is already taken.";
                throw new ResponseStatusException(HttpStatus.CONFLICT, errorMessage);
            } else {
                user.setUsername(updatedUser.getUsername());
            }
            user.setEmail(updatedUser.getEmail());
            user.setFullName(updatedUser.getFullName());
            user.setBiography(updatedUser.getBiography());
            user.setProfilePicture(updatedUser.getProfilePicture());

            if (updatedUser.getLocation() != null) {
                String location = updatedUser.getLocation();
                Location existingLocation = locationRepository.findByLocationName(location);
                if (existingLocation == null) {
                    throw new IllegalArgumentException("No Location Found");
                }
                user.setLocation(location);
            }
            userRepository.save(user);
        }
        else {
            throw new IllegalArgumentException("User not found with username: " + username);
        }
    }

    @Transactional
    public void deleteUserByUsername(String username) {
        List<User> userList = userRepository.findByUsername(username);
        if (!userList.isEmpty()) {
            User user = userList.get(0);
            userRepository.delete(user);
        } else {
            throw new IllegalArgumentException("User not found with username: " + username);
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getAllMentees(){
        return userRepository.findByAccountType(User.AccountType.MENTEE);
    }

    public List<User> getAllMentors() {
        return userRepository.findByAccountType(User.AccountType.MENTOR);
    }

    public List<User> getAllMentorsByLocation(String locationName){
        return userRepository.findByAccountTypeAndLocationName(User.AccountType.MENTOR, locationName);
    }

    public List<User> getAllMenteesByLocation(String locationName){
        return userRepository.findByAccountTypeAndLocationName(User.AccountType.MENTEE, locationName);
    }

    public List<User> getUserByName(String fullname){
        return userRepository.findByUsername(fullname);
    }

}
