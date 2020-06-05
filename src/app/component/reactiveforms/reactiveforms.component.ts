import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    name : new FormControl('Trisha',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email: new FormControl(),
    address : new FormGroup({
      street : new FormControl(),
      city : new FormControl(),
      zipcode : new FormControl(null,[Validators.required,Validators.pattern('^[0-9][1-9]{4}$')])
    })
  })

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
