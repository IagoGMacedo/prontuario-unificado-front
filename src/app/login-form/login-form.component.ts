import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = "login";
  login: string = "";
  password: string = "";
  firstName:string = "";
  lastName:string = "";

  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  onSubmitLogin(): void{
    this.onSubmitLoginEvent.emit({"login":this.login,"password":this.password});
  }

  onSubmitRegister(): void{
    //aqui depois vai passar os outros campos no form de register
    this.onSubmitRegisterEvent.emit({"firstName":this.firstName,"lastName":this.lastName,"login":this.login,"password":this.password});
  }

  


  formatarCPF(valor: string): string {
    const mascara = '###.###.###-##';
    const texto = valor.replace(/\D/g, '');
    const tam = texto.length;
    let saida = '';
    for (let i = 0; i < mascara.length; i++) {
      if (i < tam) {
        saida += mascara[i];
      } else {
        saida += '#';
      }
    }
    return saida;
  }
}
