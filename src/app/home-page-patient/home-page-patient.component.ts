import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Exam } from '../models/exam.model';


@Component({
  selector: 'app-home-page-patient',
  templateUrl: './home-page-patient.component.html',
  styleUrls: ['./home-page-patient.component.scss']
})
export class HomePagePatientComponent {
  showFiller = false;
  axiosService : AxiosService;
  exams : Exam[] = [
    {id:"1", date: new Date("2003-01-29").toDateString(), doctor:"benevides", name:"Hemograma", patient:"iago"}
  ];
  displayedColumns = ['name','date','doctor','action'];

  constructor(private pAxiosService: AxiosService){
    this.axiosService = pAxiosService;
  };
}
