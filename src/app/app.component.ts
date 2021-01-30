import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Контакт центр';
  menu: Array<string>;

  constructor() {}

  getMenu() {
    this.menu = [
      'Наши контакты',
      'Обратная связь',
      'Онлайн чат',
      'Предложения',
      'Отзывы',
      'Конфиденциальность',
      'Еще',
    ];
  }

  ngOnInit() {
    this.getMenu();
  }
}
