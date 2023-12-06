import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProfessionalComponent } from './content-professional.component';

describe('ContentProfessionalComponent', () => {
  let component: ContentProfessionalComponent;
  let fixture: ComponentFixture<ContentProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentProfessionalComponent]
    });
    fixture = TestBed.createComponent(ContentProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
