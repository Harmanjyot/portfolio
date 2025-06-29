package com.harmanrayat.Portfolio;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Document(collection = "enquiries")
@Data
@AllArgsConstructor
@Builder
public class Enquiry {
	
	@Id
	private String id;
	
	private String name;
	private String email;
	private String mobile;
	private String enquiryTxt;

	public Enquiry() {
	}

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEnquiryTxt() {
        return enquiryTxt;
    }

    public void setEnquiryTxt(String enquiryTxt) {
        this.enquiryTxt = enquiryTxt;
    }
}
