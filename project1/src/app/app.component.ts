import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Vinoth';

  // constructor(private fg:FormGroup){}

  form: FormGroup = new FormGroup({
    vin: new FormControl('', Validators.required),
    vas: new FormControl('', Validators.required),
    siv: new FormControl('', Validators.required),
  });

  submit(form: any) {
    console.log('submitted', form);
  }

  public get vinoth() {
    return this.form.get('vin');
  }
}
