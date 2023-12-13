import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  //state of the logged user
  //based on an auth.service
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: UserModel;

  constructor() { 
    axios.defaults.baseURL = "http://localhost:8080"
    axios.defaults.headers.post["Content-type"] = "application/json"
    if(this.getAuthToken() != null){
      this.user = this.getUser(this.getAuthToken());
    }
    this._isLoggedIn$.next(!!this.getAuthToken());
  }

  getAuthToken(): any{
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void{
    if(token != null){
      window.localStorage.setItem("auth_token", token);
      this._isLoggedIn$.next(true);
      this.user = this.getUser(token);
      console.log("user setado "+this.user.login)
    } else{
      window.localStorage.removeItem("auth_token");
    }
  }

  request(method: string, url: string, data: any, queryParams?: Record<string, any>): Promise<any>{
    let headers = {};

    if(this.getAuthToken() != null){
      headers = {"Authorization": "Bearer "+this.getAuthToken()};
    }
    console.log("informações da request");
    console.log(headers, method, url, data, queryParams);
    return axios({
      headers: headers,
      method: method,
      url: url,
      data: data,
      params: queryParams
    });
  }

  private getUser(token: string): UserModel{
    let jsonContent = JSON.parse(atob(token.split('.')[1]));
    return {firstName: jsonContent.firstName, lastname: jsonContent.lastName, role: jsonContent.role, login: jsonContent.iss};
  }

  
}
