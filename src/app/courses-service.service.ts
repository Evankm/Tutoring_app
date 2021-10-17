import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  constructor(private webReqService: WebRequestService) { }

  getCourses(id: any){
    console.log(id)
    return this.webReqService.get('api', id)
  }
}
