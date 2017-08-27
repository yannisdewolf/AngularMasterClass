import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x) {
    console.log(x)
  }

  submit(f: NgForm) {
    if (f.valid) {
      let form = f.form;
      let firstName = form.controls.firstName;
      console.log('firstName ', f.value.contact.firstName);
      console.log(f);
    } else {
      console.log('not doing anything... form is not valid');
    }
  }

}
