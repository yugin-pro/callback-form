import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor() { }

  addFormToBD(callBackForm: FormGroup){
    /*load to BD */
    console.log(callBackForm);
    
  }
}
