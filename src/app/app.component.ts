import { Component, OnInit } from '@angular/core';
import { GithubService } from './service/github.service';
import { Profile } from './model/Profile';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Github profiles';
  profile :Profile | undefined;
  profileName = new FormControl();
  constructor(private service:GithubService){

  }
  getUserProfile(username:string){
    this.service.getProfileByUserName(username).subscribe((res:Profile)=>{
       this.profile = res;
    })
  }
  search(){
    let name = this.profileName.value;
    this.getUserProfile(name);
  }
  ngOnInit(): void {
  } 
}
