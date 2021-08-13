// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }



import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  name ="";
  


  constructor() { }

  public setAuth(token:string) {
    
    if(token==="remove") {

      localStorage.removeItem('access_token');
    } else {

      localStorage.setItem('access_token', token);
    
    }
   
  }

  public getAuth():boolean {
    console.log("token=", localStorage.getItem('access_token'))
    return localStorage.getItem('access_token') !==  null;
  }

  public getName():string {

    let token="";
    
    if(localStorage.getItem('access_token')) {

      token = localStorage.getItem('access_token')!
    }
     

    return atob(token.split('.')[1])
  }



}
