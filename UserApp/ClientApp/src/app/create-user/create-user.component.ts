import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  usuarios: Observable<User[]>;
  usuario: User = new User();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.usuario = new User();
  }

  save() {
    this.userService.createUser(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.reloadData();
  }

  gotoList() {
    this.router.navigate(['/list-user']);
    
  }

  reloadData() {
    this.usuarios = this.userService.getUserList();
  }
}
