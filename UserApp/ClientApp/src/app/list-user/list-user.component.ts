import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  usuarios: Observable<User[]>;

  constructor(private userService: UserService,
    private router: Router) { }

ngOnInit() {
  this.reloadData();
}

reloadData() {
  this.usuarios = this.userService.getUserList();
}

deleteUser(codigo: number) {
  this.userService.deleteUser(codigo)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

userDetails(codigo: number){
  this.router.navigate(['details', codigo]);
}

updateUser(codigo: number){
    this.router.navigate(['update', codigo]);
}

}
