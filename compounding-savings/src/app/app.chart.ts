import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'chart',
  template:`
   <div class="row">
    <div class="col-xs-3 side-menu">
      <div class = "row">
        <div class="col-xs-12">
          <h1> Input </h1>
        </div>
      </div>
      <infobox></infobox>
      <infobox></infobox>
      <infobox></infobox>
      <div class="row">
        <div class="col-xs-12">
          <button class="btn btn-block btn-primary btn-add" (click)="onClick()"> Add </button>
        </div>
      </div>
    </div>

    <div class="col-xs-9">
      <canvas baseChart
        [datasets]="lineChartData"
        [labels]="lineChartLabels"
        [options]="lineChartOptions"
        [colors]="lineChartColors"
        [legend]="lineChartLegend"
        [chartType]="lineChartType"
        (chartHover)="chartHovered($event)"
        (chartClick)="chartClicked($event)">
      </canvas>
    </div>
  </div>
  `,
  styleUrls: ['./style/app.component.css']
})
export class ChartComponent {
   constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
   }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Savings 1'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Savings 2'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Savings 3'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public onClick(){
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Add Savings')
        .body(`
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Another label</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
              </div>
            </form>
            `)
        .okBtnClass('btn-block btn-success')
        .okBtn('Submit')
        .open();
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
