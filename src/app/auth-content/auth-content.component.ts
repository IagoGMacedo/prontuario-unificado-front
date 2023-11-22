import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.scss']
})
export class AuthContentComponent {
  data: string[] = [];

  constructor(private axiosService : AxiosService){
  }

  ngOnInit(): void{
    //requisicao
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then(
      (response) => this.data = response.data
    );
  }
}
