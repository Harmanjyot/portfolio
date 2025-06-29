package com.harmanrayat.Portfolio;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/enquiries")
public class EnquiryController {
    
    private static final Logger logger = LoggerFactory.getLogger(EnquiryController.class);

    @Autowired
    private EnquiryService enquiryService; 
    
    @PostMapping
    public ResponseEntity<?> createEnquiry(@RequestBody Map<String, String> payload) {
//    	logger.info("DATA RECEIVED " + payload.get("name"));
        try {
            // Simple validation example
            if (payload.get("name") == null || payload.get("email") == null || payload.get("enquiryTxt") == null) {
                logger.error("Missing required fields in payload: {}", payload);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Missing required fields: name, email, and enquiryTxt are mandatory.");
            }

            Enquiry enquiry = new Enquiry();
            enquiry.setName(payload.get("name"));
            enquiry.setEmail(payload.get("email"));
            enquiry.setMobile(payload.get("mobile"));  // optional maybe
            enquiry.setEnquiryTxt(payload.get("enquiryTxt"));
            Enquiry savedEnquiry = enquiryService.createEnquiry(enquiry);
            return new ResponseEntity<Enquiry>(savedEnquiry, HttpStatus.CREATED);
            
        } catch (Exception e) {
            logger.error("Failed to create enquiry: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while creating enquiry.");
        }
    }
}
