package com.mentorme.service;

import com.mentorme.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Handles Message-related operations
 */
@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;
}
