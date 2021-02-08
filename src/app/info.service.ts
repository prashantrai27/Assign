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

  getData() : Observable <any> {

    let url = 'https://jsonplaceholder.typicode.com/users';   //thats how we fetch data from upi using services
    return this.http.get(url);
    
  }
}
