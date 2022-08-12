import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: User = new User();

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  fazerLogin() {
    console.log(this.usuario);
    this.userService.fazerLogin(this.usuario);
  }
}
