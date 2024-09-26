package com.giggagames.api.model;
import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String nome;
    String descricao;
    String plataforma;
    String capa;
    String capaWidescreen;
    Double preco;
    List<String> capturas;

    public String getCapaWidescreen() {
        return capaWidescreen;
    }


    public void setCapaWidescreen(String capaWidescreen) {
        this.capaWidescreen = capaWidescreen;
    }


    public String getDescricao() {
        return descricao;
    }


    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }


    public List<String> getScreenshotsGame() {
        return capturas;
    }


    public void setScreenshotsGame(List<String> capturas) {
        this.capturas = capturas;
    }


    public Game () {
    };
    

    public Game(String nome, String descricao, String plataforma, String capa, Double preco, List<String> capturas, String capaWidescreen) {
        this.nome = nome;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.capa = capa;
        this.preco = preco;
        this.capturas = capturas;
        this.capaWidescreen = capaWidescreen;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getPlataforma() {
        return plataforma;
    }
    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }
    public String getCapa() {
        return capa;
    }
    public void setCapa(String capa) {
        this.capa = capa;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }
   
    
    


    
}
