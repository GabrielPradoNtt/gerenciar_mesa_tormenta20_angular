import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-botoes-menu',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './botoes-menu.component.html',
  styleUrl: './botoes-menu.component.scss'
})
export class BotoesMenuComponent {
  @Input() nome = '';
  @Input() link = '';
  @Input() icone = '';
}
