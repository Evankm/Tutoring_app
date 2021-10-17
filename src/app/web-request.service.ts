import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:3000'
  }

  get(uri: string, id: any){
    return this.http.get(`${this.ROOT_URL}/${uri}/${id}`)
  }

  post(uri: string, payload: Object){
    console.log(payload)
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }
}
