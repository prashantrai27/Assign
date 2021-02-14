import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from "../model/user"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private route:ActivatedRoute,private d:InfoService) { }
  public dataId:any;
  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get("id");
    // this.dataId=id;
    // this.route.paramMap.subscribe((param:ParamMap)=>{
    //   let id = param.get('id');
    //   this.dataId = id;
    // })

    this.route.paramMap.subscribe((param:ParamMap)=>{
      let id = param.get('id');
      this.dataId = id;
    })
    this.d.getProfileData('https://jsonplaceholder.typicode.com/users/', this.dataId)
    .subscribe(
      (data) => {
        console.log(data);
        // this.profileData.push(data);
        // this.profileData = this.profileData[0];
        // console.log(this.profileData);

        this.profileData = data
      },
      (error) => {
        console.log(error);
      } 
    );
    
  }


}
