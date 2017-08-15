import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalcase'
})
export class CapitalcasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }


    let lowerc = value.toLowerCase();

    let strings = lowerc.split(' ');

    const elems: string[] = strings.slice(1, strings.length).map(elem => {

      if (elem === 'of' || elem === 'the') {
        return elem;
      }

      return this.uppercaseFirstCharacter(elem);
    });

    elems.unshift(this.uppercaseFirstCharacter(strings[0]));

    return elems.join(' ');


  }

  private uppercaseFirstCharacter(elem: string) {
    return elem.substring(0, 1).toUpperCase().concat(elem.substring(1, elem.length));
  }
}
