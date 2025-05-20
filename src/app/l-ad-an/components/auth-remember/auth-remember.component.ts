import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  imports: [],
  templateUrl: './auth-remember.component.html',
  styleUrl: './auth-remember.component.scss'
})
export class AuthRememberComponent {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(checked: boolean) {
    this.checked.emit(checked);
  }
}
