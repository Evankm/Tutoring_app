import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Eric', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Bill', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Kim', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Brian', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Johnson', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Steve', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Larry', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Seth', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Faith', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Drizzy', weight: 20.1797, symbol: 'Ne'},
];
function func() {
}
@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }
  displayedColumns: string[] = [ 'request', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
