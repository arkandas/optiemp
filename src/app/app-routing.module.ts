import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {ExploreComponent} from "./explore/explore.component";
import {StatsComponent} from "./stats/stats.component";
import {ItemComponent} from "./item/item.component";
import {PlaygroundComponent} from "./playground/playground.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
