import { Component, Inject, Input, Optional, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-response-result',
  templateUrl: './dialog-response-result.component.html',
  styleUrls: ['./dialog-response-result.component.scss']
})
export class DialogResponseResultComponent {
  @Input() stringTexto: string = '';
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: string){
    console.log("dialog foi criada com parametro: "+data);
  }

}
