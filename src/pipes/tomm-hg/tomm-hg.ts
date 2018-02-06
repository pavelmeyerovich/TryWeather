import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TommHgPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'tommHg',
})
export class TommHgPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    return Math.round(value * 0.75006157584566);
  }
}
