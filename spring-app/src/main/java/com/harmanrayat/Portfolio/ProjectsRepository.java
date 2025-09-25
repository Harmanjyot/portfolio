package com.harmanrayat.Portfolio;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectsRepository extends MongoRepository<Projects, String> {

}
