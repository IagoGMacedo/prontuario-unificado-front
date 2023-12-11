import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private papa: Papa) { }

  lerCsv(arquivo: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const leitor = new FileReader();
      leitor.onload = (e: any) => {
        this.papa.parse(e.target.result, {
          complete: (result) => {
            resolve(result.data);
          },
          header: true, 
        });
      };

      leitor.onerror = (e) => {
        reject(e);
      };

      leitor.readAsText(arquivo);
    });
  }

  returnRequestString(objCsv : object[]) : string{
    let erythogramString: string = this.returnContent(objCsv[0]);
    let leukogramString: string = this.returnContent(objCsv[1]);
    let thrombogramString: string = this.returnContent(objCsv[2]);
    
    erythogramString = '"erythogram":{'+ erythogramString +'}, ';
    leukogramString= '"leukogram":{'+ leukogramString +'}, ';
    thrombogramString = '"thrombogram":{'+ thrombogramString +'} ';
    
    let requestString = erythogramString+leukogramString+thrombogramString;
    return requestString;
  }

  returnContent(row: any) : any{
    let contentString : string = '';
    for (const obj in row) {
      if(obj != "_key" && row[obj]!=""){
        contentString += `"${obj}": ${row[obj]},`
      }
      
    }
    return contentString.slice(0, -1);
  }

  
}
