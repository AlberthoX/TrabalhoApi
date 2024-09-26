package com.giggagames.api.service;


import com.giggagames.api.model.Game;
import com.giggagames.api.repository.GameRepository;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class GameService {
    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getAllGames(){
        return gameRepository.findAll();
    }

    public void createGame(Game request){
        if(request.getNome() == null || request.getNome().isBlank()) throw new RuntimeException("O nome do Game deve ser diferente de vazio");
        if(request.getPreco() == null || request.getPreco() <= 0) throw new RuntimeException("Preço inválido");
        
        gameRepository.save(request);
    }

    public Game getGameById(Long id){
        if(id == null) throw new RuntimeException("id não válido");
        return gameRepository.findById(id)
                .orElseThrow(
                    () -> new RuntimeException("Game Não encontrado")
                );
    }

    public void updateGameById(Long id, Game update){
        if(update.getNome() == null || update.getNome().isBlank()) throw new RuntimeException("O nome do Game deve ser diferente de vazio");
        if(update.getPreco() == null || update.getPreco() <= 0) throw new RuntimeException("Preço inválido");
        Game Game = gameRepository.findById(id)
            .orElseThrow(
                () -> new RuntimeException("Game Não encontrado")
            );
        Game.setNome(update.getNome());
        Game.setPreco(update.getPreco());
        gameRepository.save(Game); 
    }

    public void deleteGameById(Long id){
        if(id == null) throw new RuntimeException("id não válido");
        gameRepository.deleteById(id);
    }
}
