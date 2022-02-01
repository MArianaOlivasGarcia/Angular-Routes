import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user?: User;

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    this.user = this.authService.user
  }


  logout() {
    this.authService.logout();
  }

}
