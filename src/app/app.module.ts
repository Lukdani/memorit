import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GameComponent } from "./components/game/game.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { SubmitGameComponent } from "./components/submit-game/submit-game.component";
import { MemoryCardComponent } from "./components/memory-card/memory-card.component";
import { NavBarComponent } from "./components/core/nav-bar/nav-bar.component";
import { GamesServiceService } from "./services/games-service.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    SubmitGameComponent,
    MemoryCardComponent,
    NavBarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GamesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
