import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Контакт центр';
  menu = {
    contact: true,
    callback: true,
    agreement: true,
    faq: false,
    suggest: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
