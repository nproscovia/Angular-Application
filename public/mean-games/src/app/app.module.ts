import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


//add the below modules. Not sure why. ASSSSSSK




import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';
//import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
//import * as FusionCharts from 'fusioncharts';
// Load Charts module
//import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
//import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';



import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GamesListComponent } from './games-list/games-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { GamesDataService } from './games-data.service';
import { UsersService } from './users.service';
import { AddGameComponent } from './add-game/add-game.component';

//why line 33.
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GamesListComponent,
    ErrorPageComponent,
    GamePageComponent,
    ProfileComponent,
    RegisterComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    //add this one for routes
    RouterModule.forRoot([{
        path: "",
        component:WelcomeComponent

    },
    {
      path: "games",
      component:GamesListComponent

  },
  {
    path: "game/:gameId",
    component:GamePageComponent

},
{
  path: "register",
  component:RegisterComponent

},
{
  path: "profile",
  component:ProfileComponent

},
{
  path: "games",
 // path: "game/add",
  component:AddGameComponent

},
{
  path: "** ",
  component:ErrorPageComponent

},


  ]),
  //NgbModule
  ],
  providers: [
    GamesDataService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
