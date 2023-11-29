import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProfessionalComponent } from './home-page-professional.component';

describe('HomePageProfessionalComponent', () => {
  let component: HomePageProfessionalComponent;
  let fixture: ComponentFixture<HomePageProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageProfessionalComponent]
    });
    fixture = TestBed.createComponent(HomePageProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
