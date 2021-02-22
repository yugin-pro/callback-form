import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu: Array<string>;

  constructor() {}

  ngOnInit(): void {
    this.getMenu();
  }
  getMenu() {
    this.menu = [
      'Kонтакты',
      'Обратная связь',
      //'Предложения',
      'Конфиденциальность',
      //'FAQ',
    ];
  }
}
