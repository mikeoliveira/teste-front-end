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
  readonly API_URL = 'https://api.github.com/';
  
  users: any;
  repositories: any;
  stars: any;

  usersDetails: any;

  usernameSearch = "";

  constructor(private http: HttpClient) {}

  getUsers() {
      this.http.get(this.API_URL + 'search/users?q=' + this.usernameSearch).subscribe(resultSearch => {
        this.users = resultSearch;
      });
  };

  getUsersDetails(arg) {
    console.log(arg);
    this.http.get(this.API_URL + 'users/' + arg).subscribe(resultSearch => {
      console.log(resultSearch)
      this.usersDetails = resultSearch;
    });
  };

  

  // "repos_url": "https://api.github.com/users/mikeoliveira/repos"
  getRepositories() {
    this.repositories = this.http.get(this.API_URL + 'users/' + this.usernameSearch + '/repos').subscribe(res => {
      console.log(res);
    });
  };

  getStars() {
    this.repositories = this.http.get(this.API_URL + 'users/' + this.usernameSearch + '/starred').subscribe(res => {
      console.log(res);
      this.stars = res;
      this.getStarsOwner(this.stars);
    });
  };  

  getStarsOwner(arg) {
    console.log('Owner --> ' + arg.json());
  }
}
