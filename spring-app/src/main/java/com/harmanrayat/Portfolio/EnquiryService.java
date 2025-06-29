package com.harmanrayat.Portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EnquiryService {

    private static final Logger logger = LoggerFactory.getLogger(EnquiryService.class);

    @Autowired
    private EnquiryRepository enquiryRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Enquiry createEnquiry(Enquiry enquiryBody) {
        try {
            logger.info("Creating enquiry for: {}", enquiryBody.getName());
            Enquiry saved = enquiryRepo.insert(enquiryBody);
            logger.info("Enquiry inserted with ID: {}", saved.getId());
            return saved;
        } catch (Exception e) {
            logger.error("Insertion failed: ", e);
            throw e;
        }
    }
}
