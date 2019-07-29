import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { SubmitGameComponent } from './components/submit-game/submit-game.component';
import { MemoryCardComponent } from './components/memory-card/memory-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    SubmitGameComponent,
    MemoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
