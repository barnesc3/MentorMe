package com.mentorme.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mentorme.model.User;
import com.mentorme.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }

    @PutMapping("/{username}")
    public ResponseEntity<String> updateProfile(@PathVariable String username, @RequestBody User updatedUser) {
        userService.updateProfile(username, updatedUser);
        return ResponseEntity.ok("User profile updated successfully");
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<String> deleteUserByUsername(@PathVariable String username) {
        userService.deleteUserByUsername(username);
        return ResponseEntity.ok("User deleted successfully");
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/mentees")
    public ResponseEntity<List<User>> getAllMentees() {
        List<User> mentees = userService.getAllMentees();
        return ResponseEntity.ok(mentees);
    }

    @GetMapping("/mentors")
    public ResponseEntity<List<User>> getAllMentors() {
        List<User> mentors = userService.getAllMentors();
        return ResponseEntity.ok(mentors);
    }

    @GetMapping("/mentors/{locationName}")
    public ResponseEntity<List<User>> getAllMentorsByLocation(@PathVariable String locationName) {
        List<User> mentors = userService.getAllMentorsByLocation(locationName);
        return ResponseEntity.ok(mentors);
    }

    @GetMapping("/mentees/{locationName}")
    public ResponseEntity<List<User>> getAllMenteesByLocation(@PathVariable String locationName) {
        List<User> mentees = userService.getAllMenteesByLocation(locationName);
        return ResponseEntity.ok(mentees);
    }

    @GetMapping("/search")
    public ResponseEntity<List<User>> getUserByName(@RequestParam String fullname) {
        List<User> users = userService.getUserByName(fullname);
        return ResponseEntity.ok(users);
    }
}