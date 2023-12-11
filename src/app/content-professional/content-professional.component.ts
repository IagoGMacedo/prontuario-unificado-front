import { Component, HostListener } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-professional',
  templateUrl: './content-professional.component.html',
  styleUrls: ['./content-professional.component.scss']
})
export class ContentProfessionalComponent {
  contentPage: string;
  
  constructor(private axiosService : AxiosService, private router: Router){
    //this.contentPage = "newReport";
    this.contentPage = "home";

  }

  /** Comente isso para o hot reload funcionar */
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.axiosService.setAuthToken(null);
  }

  unload(){
    this.axiosService.setAuthToken(null);
    this.router.navigate(['/login']);
  }
}
