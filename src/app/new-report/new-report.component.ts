import { Component } from '@angular/core';
import { CsvService } from '../csv.service';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {

  patientLogin : string;
  requestBodyString : string

  constructor(private csvService : CsvService, private axiosService : AxiosService){
    this.patientLogin = "";
    this.requestBodyString = "";
  }


  onChangeFile(event  : any) {
    const arquivo: File = event.target.files[0];
    if (arquivo) {
      this.csvService.lerCsv(arquivo).then((dados) => {
        this.requestBodyString = ('{'+this.csvService.returnRequestString(dados)+'}');
      });
    }
  }

  onSubmitClick(){
    if(this.patientLogin != "" && this.requestBodyString != ""){
      this.axiosService.request(
        "POST",
        "/api/hemogram",JSON.parse(this.requestBodyString),
        {patientLogin: this.patientLogin}
      ).then(
        response => console.log("resultado do request: "+response)
      );
    }
  }

  
  

  

}
