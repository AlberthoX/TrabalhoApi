package com.giggagames.api.model;

import java.util.ArrayList;
import java.util.List;

public class ListaScreenshots {
    List<String> listaScreenshots = new ArrayList<>();

    public List<String> getScreenshots() {
        return listaScreenshots;
    }

    public void addScreenshotIntoList(String img){
        this.listaScreenshots.add(img);
    }

    public void setScreenshots(List<String> listaScreenshots) {
        this.listaScreenshots = listaScreenshots;
    }

    public ListaScreenshots(){
    }

    public ListaScreenshots(List<String> listaScreenshots) {
        this.listaScreenshots = listaScreenshots;
    }

    
}
