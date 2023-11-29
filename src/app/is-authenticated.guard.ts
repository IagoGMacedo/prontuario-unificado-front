import { Router, type CanActivateFn } from '@angular/router';
import { AxiosService } from './axios.service';
import { Injector, inject } from '@angular/core';
import { tap } from 'rxjs';


export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const injector = Injector.create({
    providers: [{ provide: AxiosService, useClass: AxiosService }],
  });

  const axiosService = injector.get(AxiosService);

  return axiosService.isLoggedIn$;
};
