package com.giggagames.api.dataloader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.giggagames.api.model.Game;
import com.giggagames.api.model.ListaScreenshots;
import com.giggagames.api.repository.GameRepository;


@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private GameRepository gameRepository;
    
    @Override
    public void run(String... args) throws Exception {
        ListaScreenshots lsGta = new ListaScreenshots();
        lsGta.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_bb2ee3b9b48a60857873192cfff10546e01d4a86.jpg?t=1726606628");
        lsGta.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_43e9c59d968e7f99f1eef065af85b3e542100366.jpg?t=1726606628");

        ListaScreenshots lsMafia = new ListaScreenshots();
        
        lsMafia.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/ss_53523304d2d0f9846c9c27059334629e8a83144e.jpg?t=1724260178");
        lsMafia.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/ss_f531c551d9794deafc1e45421b70e8d4c254aaca.jpg?t=1724260178");


        ListaScreenshots lsEldenRing = new ListaScreenshots();
        
        lsEldenRing.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.jpg?t=1726158298");
        lsEldenRing.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_dcdac9e4b26ac0ee5248bfd2967d764fd00cdb42.600x338.jpg?t=1726158298");


        ListaScreenshots lsForza = new ListaScreenshots();
        
        lsForza.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_00f0090174380eeaf8753bd3d1028b6772c3aebf.jpg?t=1725950938");
        lsForza.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.jpg?t=1725950938");


        ListaScreenshots lsRdr = new ListaScreenshots();
        
        lsRdr.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.jpg?t=1720558643");
        lsRdr.addScreenshotIntoList("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.jpg?t=1720558643");



        gameRepository.save(new Game("Grand Theft Auto V","GTA V é um jogo de ação e aventura em mundo aberto que se passa na fictícia cidade de Los Santos. Os jogadores controlam três protagonistas — Michael, Franklin e Trevor — em uma narrativa cheia de crimes, perseguições e reviravoltas.","PC/PS3/X-360/X-ONE/PS4/PS5/X-SX/X-SS","https://s2-techtudo.glbimg.com/emive1thVR6x2SyhvaOZ5_kR-EY=/0x0:300x371/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg",30.0, lsGta.getScreenshots(),"https://www.igta5.com/images/official-artwork-blitz-play.jpg"));


        gameRepository.save(new Game("Mafia: Definitive Edition","Neste jogo refeito do zero, suba na hierarquia da máfia durante a Lei Seca. Após um encontro acidental com a máfia, o taxista Tommy Angelo entra em um terrível submundo.","PC/X-ONE/PS4","https://upload.wikimedia.org/wikipedia/pt/a/ae/Mafia_Definitive_Edition.jpg", 30.0, lsMafia.getScreenshots(),"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/ss_010d8fc827531edf76010106acb78a75188db373.jpg?t=1724260178"));


        gameRepository.save(new Game("ELDEN RING","O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.","PC/X-ONE/PS4","https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg", 30.0, lsEldenRing.getScreenshots(),"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.jpg?t=1726158298"));
        
        gameRepository.save(new Game("Forza Horizon 5","Sua maior aventura Horizon te espera! Lidere impressionantes expedições pelo mundo aberto vibrante e em constante evolução nas terras mexicanas. Participe de corridas divertidas e sem limites enquanto pilota centenas dos melhores carros do mundo.","PC/X-ONE/X-SERIES","https://store-images.s-microsoft.com/image/apps.7859.14506879174941978.138d3eab-0b06-443b-a252-c99592521394.33a348aa-892d-49b8-9ef2-6ff06c22cf96", 30.0, lsForza.getScreenshots(),"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_cf56e25a0290556ba83229eb0ab370d10be0407c.jpg?t=1725950938"));

        gameRepository.save(new Game("Red Dead Redemption 2","Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos.","PC/X-ONE/PS4","https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png", 30.0, lsRdr.getScreenshots(),"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.jpg?t=1720558643"));
    }
}
