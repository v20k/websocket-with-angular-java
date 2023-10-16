import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-profilee',
  templateUrl: './profilee.component.html',
  styleUrls: ['./profilee.component.css'],
})
export class ProfileeComponent implements OnInit {
  constructor(private rou: ActivatedRoute) {}

  field: any;
  //  obj:any;
  ngOnInit() {
  //  this.obj= this.rou.snapshot.queryParamMap;
    this.rou.queryParamMap.subscribe((obj) => {
      console.log(obj.get('params'));
      // console.log(this.obj.params);
      
      // this.field = this.obj;
      this.field = obj;
      console.log(this.field);
      this.field = this.field.params;
      console.log(this.field);
    });
  }
}
