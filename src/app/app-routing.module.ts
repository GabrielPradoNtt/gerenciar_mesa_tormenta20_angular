import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './page/characters/characters.component';
import { SheetComponent } from './page/characters/sheet/sheet.component';
import { ConfigComponent } from './page/config/config.component';
import { GroupComponent } from './page/group/group.component';
import { HomeComponent } from './page/home/home.component';
import { PostComponent } from './page/post/post.component';
import { StoryComponent } from './page/story/story.component';
import { WorldComponent } from './page/story/world/world.component';
import { ThreatsComponent } from './page/threats/threats.component';
import { NpcsComponent } from './page/characters/npcs/npcs.component';
import { PlayersComponent } from './page/characters/players/players.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'characters/player',
    component: PlayersComponent
  },
  {
    path: 'characters/sheet',
    component: SheetComponent
  },
  {
    path: 'characters/npcs',
    component: NpcsComponent
  },
  {
    path: 'threats',
    component: ThreatsComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'story/world',
    component: WorldComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
