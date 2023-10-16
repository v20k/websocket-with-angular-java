import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formm',
  templateUrl: './formm.component.html',
  styleUrls: ['./formm.component.css'],
})
export class FormmComponent {
  form = new FormGroup({
    namee: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]{1,}'),
    ]),
    emaill: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phoneNumberr: new FormControl('', [
      Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(10)
      Validators.pattern('[0-9]{10}'),
    ]),
    cityy: new FormControl('', Validators.required),
    passwordd: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      ),
    ]),
    reenterPasswordd: new FormControl('', [Validators.required]),
    formCheck: new FormControl('', [
      Validators.required,
      Validators.pattern('true'),
    ]),
  });

  // submit() {
  //   console.log('submitted', this.form);
  // }
  nameee(s: any) {
    return this.form.get(s);
  }

  public get cityField(): any {
    return this.form.get('cityy');
  }
}
