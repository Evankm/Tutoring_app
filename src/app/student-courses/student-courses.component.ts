import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../courses-service.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {

  constructor(private coursesService: CoursesServiceService) { }

  courses: any = {}

  ngOnInit(): void {

    this.courses = this.coursesService.getCourses("616bd72cfc5849e35e4fd6fd").subscribe((data)=>{
      console.log("Courses", data)
    })
    
  }

}
