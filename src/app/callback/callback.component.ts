import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IssuesService } from '../common/issues.service'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent implements OnInit {
  title: string = 'ОБРАТНАЯ СВЯЗЬ';
  callBackForm = new FormGroup({
    question: new FormControl(''),
    fio: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    ext: new FormControl(''),
    access: new FormControl(''),
  });

  constructor(private issuesService: IssuesService) {
  }

  ngOnInit(): void {}

  onSubmit(){
    this.issuesService.addFormToBD(this.callBackForm)
    
  }
}
