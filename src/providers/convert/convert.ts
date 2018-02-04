
import { Injectable } from '@angular/core';

/*
  Provider containing unit-conversion functions 
*/
@Injectable()
export class ConvertProvider {

  KelvinToCelsius(arg: number): number {
    return (arg - 273.15);
  }

}
