import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {
      id: 1, name: 'Email'
    }, {
      id: 2, name: 'Phone'
    }
  ];

  log(x) {
    console.log(x);
  }

  submit(f: NgForm) {
      console.log(f);

    if (f.valid) {
      console.log('formdata ', f.value);
    } else {
      console.log('not doing anything... form is not valid');
    }
  }

}
