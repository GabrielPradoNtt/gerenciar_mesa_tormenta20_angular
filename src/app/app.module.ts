import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { PostComponent } from './page/post/post.component';
import { CharactersComponent } from './page/characters/characters.component';
import { SheetComponent } from './page/characters/sheet/sheet.component';
import { GroupComponent } from './page/group/group.component';
import { ThreatsComponent } from './page/threats/threats.component';
import { StoryComponent } from './page/story/story.component';
import { WorldComponent } from './page/story/world/world.component';
import { ConfigComponent } from './page/config/config.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { NpcsComponent } from './page/characters/npcs/npcs.component';
import { PlayersComponent } from './page/characters/players/players.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CharactersComponent,
    SheetComponent,
    GroupComponent,
    NpcsComponent,
    ThreatsComponent,
    StoryComponent,
    WorldComponent,
    ConfigComponent,
    PlayersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
