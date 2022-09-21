import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'adultpipe' })
export class AdultPipe implements PipeTransform {
  transform(value: any[]) {
    return value.filter((u) => u.age > 18);
  }
}
