import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  title: string = '';
  contacts: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.title = 'КОНТАКТЫ';
    this.contacts = this.getContacts();
  }

  getContacts() {
    return [
      { type: 'phone', content: '8-900-383-39-83', icon: 'fa fa-phone' },
      {
        type: 'adress',
        content: 'ул Интернации 23 а',
        icon: 'fa fa-map-marker',
      },
      { type: 'telegram', content: '@yugindm', icon: 'fab fa-telegram' },
      {
        type: 'email',
        content: 'yugin.pro@gmail.com',
        icon: 'fa fa-envelope',
      },
    ];
  }
}
