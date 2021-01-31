import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Profile } from '../model/Profile';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/vnd.github.v3+json'
    })
};
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }
  getProfileByUserName(username:string):Observable<Profile>{
    return this.http.get<Profile>(environment.baseUrl + "users/"+ username,httpOptions);
  }
}
