import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BotoesMenuComponent } from './botoes-menu/botoes-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';

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
export class MenuComponent implements OnInit {
  listaBotoes = [
    { id: "home", nome: 'Tormenta 20', link: '/', icone:'castle'},
    { id: "jogador", nome: 'Jogadores', link: '/jogadores', icone:'person'},
    { id: "grupo", nome: 'Grupo', link: '/grupos', icone:'groups'},
    { id: "npc", nome: 'Não Jogáveis (NPC)', link: '/npc', icone:'diversity_3'},
    { id: "ameaca", nome: 'Ameaças', link: '/ameacas', icone:'sports_mma'},
    { id: "historia", nome: 'Historias', link: '/historias', icone:'menu_book'},
    { id: "config", nome: 'Config.', link: '/config', icone:'settings'}
  ];
  protected subRoute: string | null = null;
  private routerSubscription: Subscription | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.router.routerState.snapshot.url;
        this.setSubRoute(path);
      });

    const initialPath = this.route.snapshot.url.map(segment => segment.path).join('/');
    this.setSubRoute(initialPath);
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  navigatePesquisa() {
    this.router.navigate(['/pesquisar']);
  }

  setSubRoute(path: string) {
    if( !!path && path !== '/' ) {
      [
        { id: "pesquisar", link: '/pesquisar'}, 
        ...this.listaBotoes
      ].forEach(button => {
        if(path.includes(button.link) && button.id !== 'home') {
          this.subRoute = button.id;
        }
      })
    } else {
      this.subRoute = 'home';
    }
  }

}
