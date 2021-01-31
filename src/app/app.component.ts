import { Component, OnInit } from '@angular/core';
import { GithubService } from './service/github.service';
import { Profile } from './model/Profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Github profiles';
  profile :Profile | undefined;
  constructor(private service:GithubService){

  }
  getUserProfile(username:string){
    this.service.getProfileByUserName(username).subscribe((res:Profile)=>{
       this.profile = res;
    })
  }
  ngOnInit(): void {
    this.getUserProfile("yosraf")
  } 
}
