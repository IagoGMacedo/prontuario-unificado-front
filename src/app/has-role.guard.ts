import { Injector } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AxiosService } from './axios.service';

export const hasRoleGuard: CanActivateFn = (route, state) => {

  const injector = Injector.create({
    providers: [{ provide: AxiosService, useClass: AxiosService }],
  });

  const axiosService = injector.get(AxiosService);
  //console.log(route.data['role']);
  //console.log(axiosService.user.role.includes(route.data['role']));
  //return true;
  return axiosService.user.role.includes(route.data['role']);
};
