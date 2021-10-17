import { Component } from '@angular/core';



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
