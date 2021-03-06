import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { EnrollmentService } from '../enrollment.service';
import { GetUserDetailsComponent } from '../get-user-details/get-user-details.component';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.scss']
})
export class ReactiveFormBuilderComponent implements OnInit {
  registrationForm: FormGroup;
  enableInput = false;
  userNameInput: String = '';
  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }
  constructor(private fb: FormBuilder, private enrollService: EnrollmentService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), forbiddenNameValidator(/password/)]],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator });

    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if (checkedValue) {
        email.setValidators(Validators.required);

      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    this.enrollService.registerUser(this.registrationForm.value).subscribe(
      data => console.log('success', data),
      error => console.log('error', error.statusText)
    )
  }
  fetchUserDetails() {
    this.enrollService.getUserDetails(this.userNameInput).subscribe(data => {
      if (data && data.length > 0) {
        Object.keys(data[0]).forEach((key) => {
          if (this.registrationForm.controls.hasOwnProperty(key)) {
            this.registrationForm.controls[key].setValue(data[0][key]);
          }
        });
      }

    },
      err => {
        console.log('err', err);
      });
  }
}
