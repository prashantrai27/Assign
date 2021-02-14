import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private data: any = [];

  constructor(private http: HttpClient) { }
d:any;
  public isAuthenticated():boolean {
  this.d = sessionStorage.getItem('userData');
    if(this.d && this.d.length > 0){
        return true;
    }
    return false;
  }

  async Login(postData:any){
    const responseData = {
      name: "Prashant Rai",
      id: '001',
      token: "23XH5"
    }
     await sessionStorage.setItem('userData',JSON.stringify(responseData));
     return true;
  }
  async Logout(){
    await sessionStorage.removeItem('usersData');
    await sessionStorage.clear();
    return true;
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
