import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Exam } from '../models/exam.model';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { UserModel } from '../models/user.model';


@Component({
  selector: 'app-home-page-patient',
  templateUrl: './home-page-patient.component.html',
  styleUrls: ['./home-page-patient.component.scss']
})
export class HomePagePatientComponent {
  showFiller = false;
  axiosService : AxiosService;
  exams : any[] = [];
  
  displayedColumns = ['name','date','professionalName','action'];
  //displayedColumns = ['name','professionalName','action'];

  constructor(private titleService : Title,private pAxiosService: AxiosService){
    this.axiosService = pAxiosService;
    this.checkForExams();
    this.titleService.setTitle('Prontuário - Paciente');
  };

 
  
  checkForExams(){
    //this.exams.push({date: new Date("2003-01-29").toDateString(), professionalName:"benevides", name:"Hemograma", patientName:"iago"})
    console.log("check for exams");
    console.log(this.axiosService.user.login);
    this.axiosService.request(
      "GET","/api/hemogram/get-hemograms",
      {},{patientLogin: this.axiosService.user.login}
    ).then(
      response => {
        console.log(response.data);
        for(const object of response.data){
          //this.exams.push({name:"Hemograma",patientName: object.patientName, professionalName: object.professionalName, date: new Date("2003-01-29").toDateString()});
        }
        this.exams = response.data;
        console.log(this.exams);
      }
    );
  }


  
}
