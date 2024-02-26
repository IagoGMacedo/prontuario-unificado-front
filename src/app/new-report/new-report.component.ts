import { Component } from '@angular/core';
import { CsvService } from '../csv.service';
import { AxiosService } from '../axios.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogResponseResultComponent } from '../dialog-response-result/dialog-response-result.component';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {

  patientLogin : string;
  requestBodyString : string

  constructor(private csvService : CsvService, private axiosService : AxiosService, public dialog: MatDialog){
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
    
    try {
      if(this.patientLogin != "" && this.requestBodyString != ""){
        this.axiosService.request(
          "POST",
          "/api/hemogram",JSON.parse(this.requestBodyString),
          {patientLogin: this.patientLogin}
        ).then(
          response => {
            this.openDialog('0ms', '0ms',response.status=="201"?"Laudo incluído com sucesso":"Erro ao cadastrar laudo")
          }
        );
      }
    } catch (error) {
      this.openDialog('0ms', '0ms',"Erro ao cadastrar laudo")
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, contentString: string): void {
    this.dialog.open(DialogResponseResultComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: contentString
    });
  }

  

  
  

  

}
