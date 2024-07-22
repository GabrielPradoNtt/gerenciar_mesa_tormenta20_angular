import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BotoesMenuComponent } from './botoes-menu/botoes-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    BotoesMenuComponent,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  listaBotoes = [
    { nome: 'Tormenta 20', link: '/', icone:'castle'},
    { nome: 'Jogadores', link: '/jogadores', icone:'person'},
    { nome: 'Grupo', link: '/grupos', icone:'groups'},
    { nome: 'Não Jogáveis (NPC)', link: '/npc', icone:'diversity_3'},
    { nome: 'Ameaças', link: '/ameacas', icone:'sports_mma'},
    { nome: 'Historias', link: '/historias', icone:'menu_book'},
    { nome: 'Config.', link: '/config', icone:'settings'}
  ];

  constructor() {}

}
