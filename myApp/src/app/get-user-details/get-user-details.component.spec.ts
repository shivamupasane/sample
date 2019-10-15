import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserDetailsComponent } from './get-user-details.component';

describe('GetUserDetailsComponent', () => {
  let component: GetUserDetailsComponent;
  let fixture: ComponentFixture<GetUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
