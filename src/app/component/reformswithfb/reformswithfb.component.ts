import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reformswithfb',
  templateUrl: './reformswithfb.component.html',
  styleUrls: ['./reformswithfb.component.css']
})
export class ReformswithfbComponent implements OnInit {

  userForm:FormGroup;

  constructor(private _frmGroup : FormBuilder) { }

  ngOnInit() {

    this.userForm = this._frmGroup.group({
      name : ['Trisha',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      email:[],
      address : this._frmGroup.group({
        street:[],
        city:[],
        zipcode:[null,[Validators.required,Validators.pattern('^[0-9][1-9]{4}$')]]
      })
    })
  }

  submitFormValue() : void {
    console.log(this.userForm.value);

    let data = `Name : ${this.userForm.value.name}, 
                Email : ${this.userForm.value.name},
                City : ${this.userForm.value.address.city},
                Street : ${this.userForm.value.address.street},
                Zipcode : ${this.userForm.value.address.zipcode}`;
                alert(data);
  }


}
