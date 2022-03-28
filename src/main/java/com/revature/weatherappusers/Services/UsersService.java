package com.revature.weatherappusers.Services;

import com.revature.weatherappusers.Entity.Users;
import com.revature.weatherappusers.Repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    UsersRepository repository;

    public Object createAcc(Users user) {
        boolean exists = repository.existsById(user.getUsername());
        if (exists == true) {
            return false;
        }
        repository.save(user);
        return user;
    }

    public Object logIn(Users user) {
        Users user1 = repository.findById(user.getUsername()).orElse(null);
        if (user1 != null) {
            String password = user1.getPassword();
            if (password.equals(user.getPassword())) {
                return (user1);
            }
        }
        return false;
    }

    /*public void logOut() {
        HttpSession session = request.getSession(false);
        session.invalidate();
    }*/

    public void updateZip(Users user) {
        Users user1 = repository.findById(user.getUsername()).get();
        user1.setZipcode(user.getZipcode());
        repository.save(user1);
    }

}
