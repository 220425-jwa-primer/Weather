package com.revature.weatherappusers.Repositories;

import com.revature.weatherappusers.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users,String> {
}
