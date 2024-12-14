import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botoes-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './botoes-menu.component.html',
  styleUrl: './botoes-menu.component.scss'
})
export class BotoesMenuComponent {
  @Input() nome = '';
  @Input() link = '';
  @Input() icone = '';
  @Input() ativo = false;

  constructor(private router: Router) {}
  navigateTo() {
    this.router.navigate([this.link]);
  }
}
