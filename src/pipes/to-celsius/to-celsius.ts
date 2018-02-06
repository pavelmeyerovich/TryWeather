import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ToCelsiusPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'toCelsius',
})
export class ToCelsiusPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    return value - 273.15;
    }
}
