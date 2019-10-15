import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {
  enableInput = false;
  userName: String = '';
  constructor(private enrollService: EnrollmentService) { }

  ngOnInit() {
  }
  fetchUserDetails() {
this.enrollService.getUserDetails(this.userName).subscribe(data => {
  console.log('data', data);
},
err => {
  console.log('err', err);
});
  }
}
