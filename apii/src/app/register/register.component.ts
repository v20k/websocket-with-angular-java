import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  message:any=2;
  // obser=interval(400);
 
constructor(private crud:CrudService){
  // getapi(){
   this.crud.getapiService(1).subscribe(userData=>{ this.message=userData;console.log(this.message);}
   );
  //  this.obser.subscribe(x=>console.log(x))
  //  this.message=this.message.data;
   
  // }
}
// ngOnInit()
// {
  // this.crud.getapiService(1).subscribe(userData=>this.message=userData);
// }
// id=1;


}
