import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {


  @Input('appInputFormat') format;

  constructor(private el: ElementRef) {

  }

  @HostListener('blur') //dom event als argument
  onBlur() {
    const value: string = this.el.nativeElement.value;

    if(this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();

    }
  }

  @HostListener('focus') //dom event als argument
  onFocus() {
    console.log('on focus');
  }



}
