import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDevices() {
    return this.http.get('./src/data/feed.json')
  }

  // getDevice(userId) {
  //   return this.http.get('./src/data/feed.json/'+userId)
  // }

}


