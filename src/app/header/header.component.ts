import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() getUsers: any;
  usernameSearch: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.usernameSearch);
    console.log(this.getUsers(this.usernameSearch));

  }

}
