import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu: Array<any>;
  selectedMenuName: '';

  constructor() {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.menu = [
      { name: 'Kонтакты', show: true },
      { name: 'Обратная связь', show: true },
      { name: 'Предложения', show: false },
      { name: 'Конфиденциальность', show: true },
      { name: 'FAQ', show: false },
    ];
  }

  selectedMenu(element: any) {
    /*Обрабатываем клик по меню
    Подсвечиваем выбранное
    Скрываем остальные компоненты*/
    this.selectedMenuName = element.name;

    console.log(`Selected element: ${element}`);
  }
}
