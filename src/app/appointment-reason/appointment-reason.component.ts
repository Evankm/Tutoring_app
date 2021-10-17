import { Component, OnInit } from '@angular/core';
import { AppointmentServiceService } from '../appointment-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-appointment-reason',
  templateUrl: './appointment-reason.component.html',
  styleUrls: ['./appointment-reason.component.scss']
})
export class AppointmentReasonComponent implements OnInit {

  constructor(private router:Router, private appointmentService: AppointmentServiceService){}
  goToPage(PageName:string):void{
  //comment: any;

    
     this.router.navigate([`${PageName}`]);
   // else
   // outerrormessgae
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
