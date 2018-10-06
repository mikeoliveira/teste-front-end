import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //
  //token github - 11e05db3aee4e33939816ab564d79bb42e15e7b5

  title = 'teste-front-end';
  
  //readonly API_URL = 'https://jsonplaceholder.typicode.com/posts/';
  readonly API_URL = 'https://api.github.com/search/users?q=';
  
  users: any;
  usernameSearch = "";

  constructor(private http: HttpClient) {}

  getUsers() {
      this.users = this.http.get(this.API_URL + this.usernameSearch).subscribe(res => console.log(res));
  }

}
