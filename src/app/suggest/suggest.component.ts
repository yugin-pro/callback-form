import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss'],
})
export class SuggestComponent implements OnInit {
  title: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = 'ПРЕДЛОЖЕНИЯ';
  }
}
