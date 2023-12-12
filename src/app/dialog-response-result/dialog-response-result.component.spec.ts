import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResponseResultComponent } from './dialog-response-result.component';

describe('DialogResponseResultComponent', () => {
  let component: DialogResponseResultComponent;
  let fixture: ComponentFixture<DialogResponseResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogResponseResultComponent]
    });
    fixture = TestBed.createComponent(DialogResponseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
