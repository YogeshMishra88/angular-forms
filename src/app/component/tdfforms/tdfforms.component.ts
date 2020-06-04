import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdfforms',
  templateUrl: './tdfforms.component.html',
  styleUrls: ['./tdfforms.component.css']
})
export class TdfformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitData(frmValue):void{
    console.log(frmValue);
    let controlsValue = `Name : ${frmValue.name} , 
                         Email : ${frmValue.email}, 
                         Street : ${frmValue.address.street},
                         City : ${frmValue.address.city},
                         ZipCode : ${frmValue.address.zipcode}`;
                         alert(controlsValue);
  }

  
}
