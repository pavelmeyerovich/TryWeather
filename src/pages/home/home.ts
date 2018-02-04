import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpenWeatherMapProvider } from '../../providers/openweathermap/openweathermap';
import { ConvertProvider } from '../../providers/convert/convert';
//import { WeathercardComponent } from '../../components/components.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private mainData;
  private fetched = false;

  constructor(public navCtrl: NavController, private openweather: OpenWeatherMapProvider ) {}

  async ngOnInit() {
    this.mainData = await this.openweather.fetchWeather();
    this.fetched = true;
 }
}
