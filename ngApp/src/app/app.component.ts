import { Component } from '@angular/core';
import { AuthService } from './services/authorization/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _authService: AuthService) { }
}
