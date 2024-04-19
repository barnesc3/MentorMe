package com.mentorme.service;

import com.mentorme.repository.EvalutationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Handles Evaluation-related operations
 */
@Service
public class EvaluationService {

    @Autowired
    private EvalutationRepository evalutationRepository;
}
