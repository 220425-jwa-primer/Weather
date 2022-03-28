package com.revature.weatherappusers.Services;

import com.revature.weatherappusers.Entity.Users;
import com.revature.weatherappusers.Repositories.UsersRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@SpringBootTest
class UsersServiceTest {

    @Autowired
    public UsersRepository repository;
    @Autowired
    public HttpServletRequest request;

    @Test
    public void createAcc() {
        Users user = Users.builder()
                .username("hubba")
                .password("bubba")
                .zipcode("12345")
                .build();

        repository.save(user);
    }

    }