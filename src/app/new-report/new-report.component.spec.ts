import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReportComponent } from './new-report.component';

describe('NewReportComponent', () => {
  let component: NewReportComponent;
  let fixture: ComponentFixture<NewReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewReportComponent]
    });
    fixture = TestBed.createComponent(NewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
