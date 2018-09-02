import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Components

import { AppComponent } from './app.component';
import { TeamAComponent } from './team-a/team-a.component';
import { TeamBComponent } from './team-b/team-b.component';
import { TeamCComponent } from './team-c/team-c.component';
import { TeamDComponent } from './team-d/team-d.component';
import { HomeComponent } from './home/home.component';

// Others
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from 'ng2-charts';

const appRoutes : Routes = [
  {path : "", component : HomeComponent},
  {path : "teamA", component : TeamAComponent},
  {path : "teamB", component : TeamBComponent},
  {path : "teamC", component : TeamCComponent},
  {path : "teamD", component : TeamDComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TeamAComponent,
    TeamBComponent,
    TeamCComponent,
    TeamDComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
