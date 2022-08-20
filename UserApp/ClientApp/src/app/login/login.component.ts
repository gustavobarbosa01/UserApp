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

  onSubmit() {
    
    this.userService.fazerLogin(this.usuario);
    console.log(this.usuario);
  }

  fazerLogin(usuario: User) {

  }
}
