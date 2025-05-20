import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent implements AfterContentInit {

  showMessage: boolean = false;

  @ContentChild(AuthRememberComponent) remember!: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onFormSubmit(user: User) {
    this.submitted.emit(user);
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      })
    }
  }
}
