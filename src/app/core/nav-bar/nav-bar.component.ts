import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [MatIconModule],
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
