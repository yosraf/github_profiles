import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/model/Profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input("profile")
  profile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
