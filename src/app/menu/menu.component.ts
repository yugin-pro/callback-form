import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu: Array<any>;
  selectedMenuName: string
  @Output() selectedComponent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.menu = [
      { name: 'Kонтакты', show: true, component: 'contact' },
      { name: 'Обратная связь', show: true, component: 'callback' },
      { name: 'Предложения', show: false, component: 'suggest' },
      { name: 'Конфиденциальность', show: true, component: 'agreement' },
      { name: 'FAQ', show: false, component: 'faq' },
    ];
  }

  selectedMenu(element: any) {
    /*Обрабатываем клик по меню
    Подсвечиваем выбранное
    Скрываем остальные компоненты*/
    this.selectedMenuName = element.name;

    element.component

    let listOfComponent = {
      contact: false,
      callback: false,
      agreement: false,
      faq: false,
      suggest: false,
    }
    
    listOfComponent[element.component] = true

    this.selectedComponent.emit(listOfComponent);

    console.log(`Selected element: ${element}`);
  }
}
