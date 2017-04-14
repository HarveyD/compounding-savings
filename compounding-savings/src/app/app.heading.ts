import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>
      {{title}}
    </h1>  
    <button (click)="clicked()"> Click Me </button> 
  `,
  styleUrls: ['./app.component.css']
})
export class HeadingComponent {
  title = 'app works!';
  
  clicked(){
    alert("hello");
  }
}
