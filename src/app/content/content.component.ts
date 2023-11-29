import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor(private axiosService: AxiosService, private router: Router){}

  //request login endpoint
  onLogin(input: any): void{
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      console.log(this.axiosService.user.role);
      this.router.navigate(['/home_page_patient']);
      if(this.axiosService.user.role.includes('PATIENT')){
        this.router.navigate(['/home_page_patient']);
      } else if(this.axiosService.user.role.includes('PROFESSIONAL') || this.axiosService.user.role.includes('ADMIN')){
        this.router.navigate(['/home_page_professional']);
      }
    });
  }

  onRegister(input: any): void{
    this.axiosService.request(
      "POST", 
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response => {
        this.axiosService.setAuthToken(response.data.token);
      });
    }

}
