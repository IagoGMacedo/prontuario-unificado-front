import { Component, HostListener } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-patient',
  templateUrl: './content-patient.component.html',
  styleUrls: ['./content-patient.component.scss']
})
export class ContentPatientComponent {
  contentPage: string;
  
  constructor(private axiosService : AxiosService, private router: Router){
    this.contentPage = "home";
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.axiosService.setAuthToken(null);
  }

  unload(){
    this.axiosService.setAuthToken(null);
    this.router.navigate(['/login']);
  }
}
