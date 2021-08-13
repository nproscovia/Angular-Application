// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-game',
//   templateUrl: './add-game.component.html',
//   styleUrls: ['./add-game.component.css']
// })
// export class AddGameComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

import { Game } from '../games-list/games-list.component';
import { GamesDataService } from '../games-data.service';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {



  error!:string;
  message!:string;
  err:boolean=false;
  success:boolean=false;
  name!:string;


  constructor(private GamesDataService:GamesDataService) {

  

   }

  ngOnInit(): void {
  }


  public addGame(form:any):void {

    console.log("Game Form Submitted!",form);

    const newGame = {
      title: form.value.title,
      price: form.value.price,
      year: form.value.year,
      minAge: form.value.minAge,
      rate: form.value.rate,
      minPlayers: form.value.minPlayers,
      maxPlayers: form.value.maxPlayers,
    
  };
  console.log("mygame", newGame)

  this.GamesDataService.addGame(newGame).then(response=> {

    this.err=false;
    this.success=true;
    this.error="";
    this.message="New Game added successful, Thank you"
    form.reset();


  }).catch(error=>{

    this.err=true;
    this.success=false;
    this.error="An error occured "+error;
    this.message=""

  });


  }

 
    

  

}
