import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AxiosService } from '../axios.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  axiosService : AxiosService;
  user!: UserModel;



  constructor(private titleService : Title,private pAxiosService: AxiosService){
    this.axiosService = pAxiosService;
    this.titleService.setTitle('Prontuário - Paciente');
    this.titleService.setTitle("Prontuário - Editar dados");
  };



}
