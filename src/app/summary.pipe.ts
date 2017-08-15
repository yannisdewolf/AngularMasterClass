import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number, prefix?: string): any {
    if (!value) {
      return null;
    }

    const actualLimit = (limit) ? limit : 50;

    const actualPrefix = (prefix) ? prefix : 'SUMMARY';

    return actualPrefix + ': ' + value.substring(0, actualLimit) + '...';
  }

}
