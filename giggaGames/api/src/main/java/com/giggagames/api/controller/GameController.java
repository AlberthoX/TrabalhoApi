package com.giggagames.api.controller;


import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.giggagames.api.model.Game;
import com.giggagames.api.service.GameService;

@RestController
@RequestMapping("giggagames/v1")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService){
        this.gameService = gameService;
    }

    @GetMapping
    public List<Game> getAllGames(){
       return gameService.getAllGames(); 
    }

    @GetMapping("/{id}")
    public Game getGameById(@PathVariable Long id){
        return gameService.getGameById(id);
    }


    @PostMapping
    public void saveGame(@RequestBody Game request){
        gameService.createGame(request);
    }

    @PutMapping("/{id}")
    public void updateGame(@PathVariable Long id,@RequestBody Game requestUpdate){
        gameService.updateGameById(id,requestUpdate);
    }

    @DeleteMapping("/{id}")
    public void deleteGame(@PathVariable Long id){
        gameService.deleteGameById(id);
    }
}

