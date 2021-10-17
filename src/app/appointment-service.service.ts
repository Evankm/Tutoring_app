import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private webReqService: WebRequestService) { }

  submitAppointment(appointment: any){
    console.log(appointment)
    return this.webReqService.post('api', appointment)
  }
}
