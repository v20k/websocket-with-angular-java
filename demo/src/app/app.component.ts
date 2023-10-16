import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  binding = 'hello';

  f = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
  });

  sub(f: any) {
    console.log(f.value); //dfdlbi
  }
}
