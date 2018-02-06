import { Component, Input, OnInit } from '@angular/core';
import { ToCelsiusPipe } from '../../pipes/to-celsius/to-celsius';
import { TommHgPipe } from '../../pipes/tomm-hg/tomm-hg';

/**
 * Card for displaying main data
 */
@Component({
  selector: 'weathercard',
  templateUrl: 'weathercard.html'
})
export class WeathercardComponent implements OnInit {

  @Input('data') data: Object;
  text: string;

  constructor() {}
  
  ngOnInit() {
    console.log(this.data);
  }

}
