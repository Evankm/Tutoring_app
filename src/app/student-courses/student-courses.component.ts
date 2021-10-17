import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { CoursesServiceService } from '../courses-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Eric', weight: '9am - 9:30 am mon', symbol: 'CS 2700'},
  {position: 2, name: 'Bill', weight: '10am - 10:30 am tue', symbol: 'CS 2700'},
  {position: 3, name: 'Kim', weight: '11am - 11:30 am wed', symbol: 'CS 2700'},
  {position: 4, name: 'Brian', weight: '12pm - 12:30 pm thur', symbol: 'CS 2700'},
  {position: 5, name: 'Johnson', weight: '1pm - 1:30 pm fri', symbol: 'CS 2700'},
  {position: 6, name: 'Steve', weight: '9am - 9:30 am mon', symbol: 'CS 2700'},
  {position: 7, name: 'Larry', weight: '10am - 10:30 am tue', symbol: 'CS 2700'},
  {position: 8, name: 'Seth', weight: '11am - 11:30 am wed', symbol: 'CS 2700'},
  {position: 9, name: 'Faith', weight: '5pm - 5:30 pm fri', symbol: 'CS 2700'},
  {position: 10, name: 'Drizzy', weight: '5pm - 9:30 pm mon', symbol: 'CS 2700'},
];


function func() {
}
@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {
  hide = false;
  constructor(private router:Router, private coursesService: CoursesServiceService) { }

  goToPage(PageName:string):void{

    
    this.router.navigate([`${PageName}`]);
  // else
  // outerrormessgae
  }


  res: any
  courses: any = {}
  tas: any = {}
  all_data: any = {}

 

  ngOnInit(): void {

    this.res = this.coursesService.getCourses("616c2398fc5849e35e4fd705").subscribe((data:any)=>{
      
      this.courses = data.courses
      this.tas = data.courses[0].tutors
      this.all_data = data
      console.log("hi", this.courses)
      console.log("hi", this.tas)
      console.log("hsi", this.all_data)
    
    
    })

    
    

   
    
  }
  class_ta_table() {
    this.hide = true;
  }

  displayedColumns: string[] = [ 'request', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}

