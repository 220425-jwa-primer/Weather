package com.revature.weatherappusers.Controllers;

import com.revature.weatherappusers.Entity.Users;
import com.revature.weatherappusers.Services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsersController {

    @Autowired
    private UsersService service;

    @PostMapping("/creating")
    public Object createAcc(@RequestBody Users user){
        return service.createAcc(user);
    }

    @PostMapping("/loggingin")
    public Object logIn(@RequestBody Users user) {
        return service.logIn(user);
    }

    /*@PostMapping("/logout")
    public void logOut() {
        service.logOut();
    }*/

    @PostMapping("/changezip")
    public void updateZip(@RequestBody Users user) {
        service.updateZip(user);
    }

}
