import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private data: any = [];

  constructor(private http: HttpClient) { }

  public isAuthenticated():boolean {
    return false;
  }

  getData(url : string) : Observable <any> {

    // let url = 'https://jsonplaceholder.typicode.com/users';   //thats how we fetch data from upi using services
    return this.http.get(url);
    
  }


  // <img class="apiImage" src = "{{ ---- }}" alt />

  getProfileData(url : string, id : number) : Observable <any> {

    // url = 'https://jsonplaceholder.typicode.com/users';   //thats how we fetch data from upi using services
    return this.http.get(url + id);
  }
}
