import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  senha: string;
  codigo: number;
  usuario: User;

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.usuario = new User();

    this.codigo = this.route.snapshot.params['codigo'];

    this.userService.getUser(this.codigo)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this.codigo, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new User();
    this.gotoList();
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/list-user']);
  }

  mostraSenha() {
    
  }

}
