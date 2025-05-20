import { Component } from '@angular/core';
import { AuthFormComponent } from "./components/auth-form/auth-form.component";
import { AuthRememberComponent } from "./components/auth-remember/auth-remember.component";

@Component({
  selector: 'app-l-ad-an',
  imports: [AuthFormComponent, AuthRememberComponent],
  templateUrl: './l-ad-an.component.html',
  styleUrl: './l-ad-an.component.scss'
})
export class LAdAnComponent {

  public rememberMe: boolean = false;

  login(formValue: any) {
    console.log(formValue);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
