import { Component, Input, OnInit } from '@angular/core';

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
