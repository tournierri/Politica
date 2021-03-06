import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components import
import { DebateComponent } from './components/debate/debate.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProfilComponent } from './components/profil/profil.component';
import { VoteComponent } from './components/vote/vote.component';
import { Error404Component } from './utils/error404/error404.component';
import { DebateDetailsComponent } from './components/debate-details/debate-details.component';

// Guard imports
import { ProfilGuard } from "../app/security/profil.guard";
import { DebateGuard } from '../app/security/debate.guard';
import { RootGuard } from '../app/security/root.guard';
import { NewsGuard } from '../app/security/news.guard';
import { VoteGuard } from '../app/security/vote.guard';
import { HomeGuard } from './security/home.guard';
import { Error404Guard } from './security/error404.guard';


const routes: Routes = [
  {path:'', component: HomeComponent, canActivate:[HomeGuard]},
  {
    path:'profil',
    component:ProfilComponent,
    canActivate:[ProfilGuard],
  },
  {
    path:'debate',
    component:DebateComponent,
    canActivate:[DebateGuard],
  },
  {path:'news', component: NewsComponent, canActivate:[NewsGuard]},
  {path:'vote', component: VoteComponent, canActivate:[VoteGuard]},
  {path:'debate-details/:_id', component: DebateDetailsComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.RootModule),
    canActivate:[RootGuard],
    canLoad:[RootGuard]
  },
  {path:"**", component: Error404Component, canActivate:[Error404Guard]}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
