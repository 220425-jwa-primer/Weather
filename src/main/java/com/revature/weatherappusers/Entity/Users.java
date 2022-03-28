package com.revature.weatherappusers.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Users {
    @Id
    private String username;
    private String password;
    private String zipcode;
}
