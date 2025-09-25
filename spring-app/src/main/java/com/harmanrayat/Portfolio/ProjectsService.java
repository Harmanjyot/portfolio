package com.harmanrayat.Portfolio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectsService {
    @Autowired
    private ProjectsRepository projectsRepository;

    public ProjectsService(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }


    public List<Projects> getAllProjects() {
        return projectsRepository.findAll();
    }

    public List<Projects> getTechProjects(String tech) {
    	List<Projects> resp = projectsRepository.findAll();
    	if ("All".equalsIgnoreCase(tech)) // if all projects to display
    	{
    		return resp;
    	}
    	List<Projects> result = new ArrayList<>();
    	for(Projects project : resp)
    	{
    		  if (project.getTech() != null && project.getTech().contains(tech))  // get only projects that have the specified tech    		  
    			{ 
    	            result.add(project);
    	        }
    	}
    	return result;
    }

}
