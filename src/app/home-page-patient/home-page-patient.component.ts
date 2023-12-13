import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Exam } from '../models/exam.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home-page-patient',
  templateUrl: './home-page-patient.component.html',
  styleUrls: ['./home-page-patient.component.scss']
})
export class HomePagePatientComponent {
  showFiller = false;
  axiosService : AxiosService;
  exams : Exam[] = [
    {date: new Date("2003-01-29").toDateString(), professionalName:"benevides", name:"Hemograma", patientName:"iago"}
  ];
  displayedColumns = ['name','date','professionalName','action'];

  constructor(private pAxiosService: AxiosService){
    this.axiosService = pAxiosService;
    this.checkForExams();
  };

 
  
  checkForExams(){
    this.exams.push({date: new Date("2003-01-29").toDateString(), professionalName:"benevides", name:"Hemograma", patientName:"iago"})
    console.log("check for exams");
    console.log(this.axiosService.user.login);
    this.axiosService.request(
      "GET","/api/hemogram/get-hemograms",
      {},{patientLogin: this.axiosService.user.login}
    ).then(
      response => {
        console.log(response.data);
        for(const object of response.data){
          this.exams.push({name:"Hemograma",patientName: object.patientName, professionalName: object.professionalName, date: new Date("2003-01-29").toDateString()});
        }
        console.log(this.exams);
      }
    );
  }

  
}
