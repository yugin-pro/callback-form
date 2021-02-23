import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Контакт центр';
  shownComponent: any 

  constructor() {}

  ngOnInit(): void {
    this.shownComponent = {
    contact: true,
    callback: true,
    agreement: true,
    faq: false,
    suggest: false,
  };
  }
  
}
