import { Component, OnInit } from '@angular/core';
import { AppointmentServiceService } from '../appointment-service.service';

@Component({
  selector: 'app-appointment-reason',
  templateUrl: './appointment-reason.component.html',
  styleUrls: ['./appointment-reason.component.scss']
})
export class AppointmentReasonComponent implements OnInit {

  comment: any;

  constructor(private appointmentService: AppointmentServiceService) { 
  }

  ngOnInit(): void {
  }

  submit():void{
    const info = {
      studentName: "Yousef",
      tutorName: "Yemi",
      time: "7:30",
      topic: "Chap 4",
      comment: "hmwk 5"
    }
    this.appointmentService.submitAppointment(info).subscribe({
      complete: () => { console.log("Done")}
    })

    }
  }
