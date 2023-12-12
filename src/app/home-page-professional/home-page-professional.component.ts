import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Exam } from '../models/exam.model';
import { ContentProfessionalComponent } from '../content-professional/content-professional.component';

@Component({
  selector: 'app-home-page-professional',
  templateUrl: './home-page-professional.component.html',
  styleUrls: ['./home-page-professional.component.scss']
})
export class HomePageProfessionalComponent {
  showFiller = false;
  axiosService : AxiosService;
  contentProfessional : ContentProfessionalComponent;
  exams : Exam[] = [
    {id:"1", date: new Date("2003-01-29").toDateString(), doctor:"benevides", name:"Hemograma", patient:"iago"}
  ];
  displayedColumns = ['name','date','patient','action','delete'];

  constructor(private pAxiosService: AxiosService, private pcontentProfessional : ContentProfessionalComponent){
    this.axiosService = pAxiosService;
    this.contentProfessional = pcontentProfessional;
  };
}
