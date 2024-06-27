import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './page/characters/characters.component';
import { SheetComponent } from './page/characters/sheet/sheet.component';
import { ConfigComponent } from './page/config/config.component';
import { GroupComponent } from './page/group/group.component';
import { HomeComponent } from './page/home/home.component';
import { NpcsComponent } from './page/npcs/npcs.component';
import { PostComponent } from './page/post/post.component';
import { StoryComponent } from './page/story/story.component';
import { WorldComponent } from './page/story/world/world.component';
import { ThreatsComponent } from './page/threats/threats.component';

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
    path: 'CharactersComponent',
    component: CharactersComponent
  },
  {
    path: 'CharactersComponent/SheetComponent',
    component: SheetComponent
  },
  {
    path: 'GroupComponent',
    component: GroupComponent
  },
  {
    path: 'NpcsComponent',
    component: NpcsComponent
  },
  {
    path: 'ThreatsComponent',
    component: ThreatsComponent
  },
  {
    path: 'StoryComponent',
    component: StoryComponent
  },
  {
    path: 'StoryComponent/WorldComponent',
    component: WorldComponent
  },
  {
    path: 'ConfigComponent',
    component: ConfigComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
