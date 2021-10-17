import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consilium-scheduling-system';
  
  public onCardClick(evt: MouseEvent){
    console.log(evt);
  }
}
