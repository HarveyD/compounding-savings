import { Component } from '@angular/core';

@Component({
  selector: 'heading',
  template:`
    <div class="row">
      <div class="col-md-12">
        <h1 class="mainHeaderText">
          {{title}}
        </h1> 
      </div>
    </div>
  `,
  styleUrls: ['./style/app.component.css']
})
export class HeadingComponent {
  title = 'Savings Motivator';
}
