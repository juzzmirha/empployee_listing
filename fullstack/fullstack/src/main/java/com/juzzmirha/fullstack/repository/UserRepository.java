package com.juzzmirha.fullstack.repository;

import com.juzzmirha.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
