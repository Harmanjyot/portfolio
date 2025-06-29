package com.harmanrayat.Portfolio;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnquiryRepository extends MongoRepository<Enquiry, String> {
	
}
