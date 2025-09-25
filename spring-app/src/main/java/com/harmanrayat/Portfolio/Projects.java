package com.harmanrayat.Portfolio;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Projects {
    @Id
    private String id;

    private String name;
    private String image;
    private String link;
    private String github;
    private String youtube;

    @Field("description")     // Mongo has "description"
    private String description;

    @Field("start_date")      // Mongo has "start_date"
    private String start_date;

    @Field("end_date")        // Mongo has "end_date"
    private String end_date;

    private List<String> tech; // matches your Array field

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }

    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }

    public String getGithub() {
        return github;
    }
    public void setGithub(String github) {
        this.github = github;
    }

    public String getYoutube() {
        return youtube;
    }
    public void setYoutube(String youtube) {
        this.youtube = youtube;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getStart_date() {
        return start_date;
    }
    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getEnd_date() {
        return end_date;
    }
    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public List<String> getTech() {
        return tech;
    }
    public void setTech(List<String> tech) {
        this.tech = tech;
    }
}