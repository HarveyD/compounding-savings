import { Component } from '@angular/core';

@Component({
  selector: 'sidemenu',
  template:`
   <div class="side-menu">
    <div class="row">
      <div class="col-xs-12">
        <h1> Input </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <button class="btn btn-block btn-primary btn-add" (click)="onClick()"> Add </button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./style/app.sidemenu.css']
})
export class SidemenuComponent {
}
