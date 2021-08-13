

//the below is auto Generated..line 5 to 13

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GamesDataService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

//is the below line for getting the single game?
import {Game} from "./games-list/games-list.component";


@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  private apiBaseUrl: string ="http://localhost:3000/api";

  constructor(private http:HttpClient) { 


  }
  public getGame(gameId:string) : Promise<Game> {

    const url: string = this.apiBaseUrl+"/games/"+gameId;
    return this.http.get(url).toPromise()
                    .then(response=>response as Game)
                    .catch(this.handleError)

  }

  
  public addGame(newGame:{}) : Promise<any> {

    const url: string = this.apiBaseUrl+"games/add";
    return this.http.post(url,newGame).toPromise()
                    .then(response=>response )
                    .catch(this.handleError)

  }

  public getGames() : Promise<Game[]> {

    const url: string = this.apiBaseUrl+"/games";
    return this.http.get(url).toPromise()
                    .then(response=>response as Game[])
                    .catch(this.handleError)

  }


  public deleteGame(gameId:string): Promise<any> {
    
    const url:string = this.apiBaseUrl+"games/"+gameId;
    return this.http.delete(url).toPromise().then(
      response => {
        console.log(response)
       return  response 
      }
      ).catch(error=> {
        console.log("err=", error)
        return error
      }
        )
  }

  private handleError(error:any) : Promise<any> {
    console.log("Something went wrong", error)
    return Promise.reject(error.message || error)
  }
}
