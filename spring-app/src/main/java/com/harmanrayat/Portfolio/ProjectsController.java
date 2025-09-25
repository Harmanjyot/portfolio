package com.harmanrayat.Portfolio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/projects")
public class ProjectsController {
    @Autowired
    private ProjectsService projectsService;

    @GetMapping
    public List<Projects> getAllProjects() {

        return projectsService.getAllProjects();
    }
    
    
    @GetMapping("/tech")
    public List<Projects> getTechProjects(@RequestParam String tech) {
        return projectsService.getTechProjects(tech);
    }

}
