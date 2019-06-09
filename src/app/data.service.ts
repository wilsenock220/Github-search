import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private username: string;
  private clientid = 'Iv1.7776f51995c3fbfc';
  private clientsecret = '04f050d32219a8769fe2676ddccfb1a4322571a2';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = '';
  }

  getUsers() {
// tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }

  getUserRepos(){
// tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }

  updateUser(username:string){
    this.username=username;
  }

}
