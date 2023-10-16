import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  data:any;

  childDataa:any='';

  receive(cdata:any){
    this.childDataa=cdata;
  }
}
