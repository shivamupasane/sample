import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'vue'];
  submitted = false;
  errorMsg;
  topicHasError = true;
  showTDF = true;
  showRFB = false;
 userModel = new User('Name', 'test@testMail.com', 6546546540, 'default', 'morning', {street: 'abc road', city: 'pune', state: 'MH', postalCode: 5456461}, true);
  constructor(private _enrollmentService: EnrollmentService) {

  }
  validateTopic (value) {
    this.topicHasError =  value === 'default';
    return this.topicHasError;
  }
  onSubmit() {
    this.submitted = true;
  this._enrollmentService.enroll(this.userModel).subscribe (
    data => console.log('success',data),
    error => this.errorMsg = error.statusText)  
  }
}
