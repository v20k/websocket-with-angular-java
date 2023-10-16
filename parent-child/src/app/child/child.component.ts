import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('send') dataa:any;

  childData!:any;
  @Output() cdata:EventEmitter<any> =new EventEmitter;

 change(){
  this.cdata.emit(this.childData);
 }


}
