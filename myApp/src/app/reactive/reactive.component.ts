import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  setFullValues = true;
registrationForm = new FormGroup({
  userName : new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
  address : new FormGroup({
    city : new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl('')
  })
})
loadData (setFullValues) {
  if(setFullValues) {
    this.registrationForm.setValue({
      userName : 'shivam',
    password: 'shivam',
    confirmPassword: 'shivam',
    address: { 
      city : 'sxs',
      state: 'mh',
      postalCode: 123456
    }
    });
    this.setFullValues = false;
  } else {
    this.registrationForm.patchValue({
      userName : 'fgjsfj',
    password: 'dsnfjndf',
    confirmPassword: 'fnsfn'
    });
    this.setFullValues = true;
  }
  
}
  constructor() { }

  ngOnInit() {
  }

}
