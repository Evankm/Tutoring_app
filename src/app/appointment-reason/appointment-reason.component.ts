import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-appointment-reason',
  templateUrl: './appointment-reason.component.html',
  styleUrls: ['./appointment-reason.component.scss']
})
export class AppointmentReasonComponent implements OnInit {

  constructor(private router:Router){}
  goToPage(PageName:string):void{

    
     this.router.navigate([`${PageName}`]);
   // else
   // outerrormessgae
  }

  ngOnInit(): void {
  }

}
