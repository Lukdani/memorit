import { Component, OnInit } from "@angular/core";
import { GamesServiceService } from "src/app/services/games-service.service";

@Component({
  selector: "game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.css"]
})
export class GameListComponent implements OnInit {
  games: [];

  constructor(private gameService: GamesServiceService) {}

  ngOnInit() {
    this.games = this.gameService.getGames();
  }
}
