import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {
    
  constructor(private enrollService: EnrollmentService) { }

  ngOnInit() {
  
  }
}
