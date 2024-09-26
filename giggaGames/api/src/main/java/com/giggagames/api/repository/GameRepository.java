package com.giggagames.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.giggagames.api.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game,Long> {
    
}
