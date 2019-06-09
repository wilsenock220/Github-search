import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: any;
  repos: any;
  username: string;

  constructor(private data: DataService) {



   }


   findUser(){
     this.data.updateUser(this.username);

     this.data.getUsers().subscribe(
      user => {
        // console.log(user);
        this.user = user;
      }

    );
    this.data.getUserRepos().subscribe(
      repos => {
        // console.log(user);
        this.repos = repos;
      }

    );

  }

  ngOnInit() {

  }

}
