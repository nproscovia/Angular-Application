// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-game-page',
//   templateUrl: './game-page.component.html',
//   styleUrls: ['./game-page.component.css']
// })
// export class GamePageComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { Router,NavigationStart} from '@angular/router';


import {Game} from "../games-list/games-list.component";
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {


  game:Game = {} as Game;
  //rating = 0;

  constructor(private gamesDataService:GamesDataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const gameId: string = this.route.snapshot.params.gameId
    this.getGame(gameId)
    //this.rating= this.game.rate;
  }

  private getGame(gameId:string):void {

    this.gamesDataService.getGame(gameId)
    .then(response =>this.receivedGame(response))
    .catch(this.handleError)
  }

  private receivedGame(game:Game) {

    this.game= game;
    //this.rating= game.rate;
  }


  //delete game
  public deleteGame(gameId:any){
    
    if (confirm("Are you sure you want to delete this Patch?, action can not be reversed"))
    {
        console.log("gameId to delete", gameId)
        this.gamesDataService.deleteGame(gameId).then(response=>{
          console.log("from delete", response)
          this.router.navigate(['/']);
        }).catch(error=>{
          console.log("error in delete", error)
        });

    } else {

    

     console.log("user not allowed", gameId)

    }
}

        


  private handleError(error:any) {
    console.log("error")
  }

}
