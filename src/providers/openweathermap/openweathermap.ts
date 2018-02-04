import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ConvertProvider } from '../convert/convert';

/*
  Provider responsible for fetching weather data from
  OpenWeatherMap API
*/

@Injectable()
export class OpenWeatherMapProvider implements OnInit {
  private MinskId = '625144';
  private ApiKey = 'd511907411ce3e724843f709ca7d2e7c';
  private debugLogs = true;

  constructor(public http: HttpClient, private conv: ConvertProvider ) {}

  /**
   * does shit
   */
  async ngOnInit() {
    if(this.debugLogs) console.log('OpenWeatherMaps provider initiated ... ');
  }

  /**
   * fetches weather data from the OpenWeather server
   * returns a promise with a JSON object
   */
  async fetchWeather(): Promise<Object> {

    const response = await this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?id=${this.MinskId}&APPID=${this.ApiKey}`
    ).toPromise();
    return response;
  } 

}
