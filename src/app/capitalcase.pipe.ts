import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalcase'
})
export class CapitalcasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }


    const lowercaseStrings = value.toLowerCase().split(' ');

    const firstCapitalizedWord = [this.uppercaseFirstCharacter(lowercaseStrings[0])];
    const capitalizedElements: string[] = lowercaseStrings.slice(1, lowercaseStrings.length).map(elem => {

      if (elem === 'of' || elem === 'the') {
        return elem;
      }

      return this.uppercaseFirstCharacter(elem);
    });

    return firstCapitalizedWord.concat(capitalizedElements).join(' ');


  }

  private uppercaseFirstCharacter(elem: string) {
    return elem.substring(0, 1).toUpperCase().concat(elem.substring(1, elem.length));
  }
}
