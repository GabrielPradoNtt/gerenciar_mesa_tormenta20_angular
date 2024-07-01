import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  modulos = [
    {
      id: 'posts',
      titulo: 'Tormenta 20',
      rota: '/posts',
      icone: 'fas fa-search'
    },
    {
      id: 'player',
      titulo: 'Jogadores',
      rota: '/characters/player',
      icone: 'fa-home'
    },
    {
      id: 'group',
      titulo: 'Grupo',
      rota: '/group',
      icone: 'fa-home'
    },
    {
      id: 'npc',
      titulo: 'NPC',
      rota: '/characters/npcs',
      icone: 'fa-home'
    },
    {
      id: 'threats',
      titulo: 'Ameaças',
      rota: '/threats',
      icone: 'fa-home'
    },
    {
      id: 'story',
      titulo: 'Historia',
      rota: '/story',
      icone: 'fa-home'
    },
    {
      id: 'config',
      titulo: 'Configurações',
      rota: '/config',
      icone: 'fa-home'
    },
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  navegar(path:string){
    debugger
    this.router.navigate([path]);
  }
}
