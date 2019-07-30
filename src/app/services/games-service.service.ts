import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GamesServiceService {
  gameList = [
    {
      id: 1,
      title: "Funny Game",
      description: "A funny game of memorit!",
      author: "Mille",
      imageUrl:
        "https://images.pexels.com/photos/1756003/pexels-photo-1756003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 2,
      title: "Awesome Game",
      description: "An awesome game of memorit!",
      author: "Andersen",
      imageUrl:
        "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      title: "Great Game",
      description: "A great game of memorit!",
      author: "Mille",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBFD8dqYHMPMNeewEZdiA0yCwNxHnID0aA4iHK8_yRgJsYyvi"
    }
  ];
  constructor() {}

  getGames() {
    return this.gameList;
  }

  getGame(gameId) {
    let index = this.gameList.findIndex(x => x.id === gameId);
    return this.gameList[index];
  }

  addGame(game) {
    this.gameList.push(game);
  }
}
