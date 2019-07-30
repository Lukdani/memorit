import { Component, OnInit } from "@angular/core";
import { GamesServiceService } from "src/app/services/games-service.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "submit-game",
  templateUrl: "./submit-game.component.html",
  styleUrls: ["./submit-game.component.css"]
})
export class SubmitGameComponent implements OnInit {
  game = {};
  gameId;
  constructor(
    private gameService: GamesServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.gameId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.gameId &&
      (this.game = this.gameService.getGame(parseInt(this.gameId, 10)));
  }

  onSubmit() {
    this.gameService.addGame(this.game);
    this.router.navigate(["/"]);
  }
}
