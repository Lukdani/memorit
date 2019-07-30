import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameListComponent } from "./components/game-list/game-list.component";
import { SubmitGameComponent } from "./components/submit-game/submit-game.component";

const routes: Routes = [
  { path: "", component: GameListComponent },
  { path: "submit", component: SubmitGameComponent },
  { path: "games/:id", component: SubmitGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
