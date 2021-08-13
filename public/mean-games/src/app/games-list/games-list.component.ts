import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { Router,NavigationStart} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

import { GamesDataService } from '../games-data.service';

//why need this below line
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})

//is onInit an interface?
export class GamesListComponent implements OnInit {
  title:string = "mean Games";

 // the games is of type GAME, is this cos of the model
 //in the back end??

  games:Game[] =[];

  //why do we need auth service.

  constructor(private gamesDataService:GamesDataService, private router:Router) { }

  ngOnInit(): void {

    this.getGames();
    
  }

  

  // public addGame(form:any):void {

  //   console.log("Game Form Submitted!",form);

  //   const newGame = {
  //     title: form.value.title,
  //     price: form.value.price,
  //     year: form.value.year,
  //     minAge: form.value.minAge,
  //     rate: form.value.rate,
  //     minPlayers: form.value.minPlayers,
  //     maxPlayers: form.value.maxPlayers,
    
  // };
  // console.log("mygame", newGame)

  // this.gamesDataService.addGame(newGame).then(response=> {

  //   this.err=false;
  //   this.success=true;
  //   this.error="";
  //   this.message="New Game added successful, Thank you"
  //   form.reset();


  // }).catch(error=>{

  //   this.err=true;
  //   this.success=false;
  //   this.error="An error occured "+error;
  //   this.message=""

  // });


  // }


//is this the same function as above line 31
  public getGames() : void {
    this.gamesDataService.getGames().then(foundGames =>this.games=foundGames);
  }

  err= false;
  success=false;
  error="";
  message="";

  


}

//is this the Game that we have been using??
export class Game {
  title!: string;
  price!: number;
  year!: number;
  _id!: string;
  rate!:number
}
