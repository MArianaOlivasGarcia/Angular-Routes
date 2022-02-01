import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menu = JSON.parse( localStorage.getItem('menu')! ) || [] ;
    console.log( this.menu );
  }

}
