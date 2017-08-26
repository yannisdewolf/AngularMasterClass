import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

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
    let form = f.form;
    let firstName = form.controls.firstName;
    console.log('firstName ', f.value.firstName);
    console.log(f);
  }

}
