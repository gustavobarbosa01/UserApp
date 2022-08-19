import { Component } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  isExpanded = false;
  mostraMenu: boolean = false;

  collapse() {
    this.isExpanded = true;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private userService: UserService) {

    this.userService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostraMenu = mostrar
    );
  }
}
