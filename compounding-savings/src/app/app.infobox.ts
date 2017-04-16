import { Component } from '@angular/core';

@Component({
  selector: 'infobox',
  template:`
  <div class="row infobox middle-xs around-xs">
    <div class="col-xs-4">
        Weekly
    </div>
    <div class="col-xs-4">
        $5.6
    </div>
    <div class="col-xs-4">
        VAS
    </div>
  </div>  

  `,
  styleUrls: ['./style/app.component.css']
})
export class InfoBoxComponent {
}
