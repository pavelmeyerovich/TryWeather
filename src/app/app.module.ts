import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenWeatherMapProvider } from '../providers/openweathermap/openweathermap';
import { ConvertProvider } from '../providers/convert/convert';
import { ComponentsModule } from '../components/components.module';
import { WeathercardComponent } from '../components/weathercard/weathercard';
import { PipesModule } from '../pipes/pipes.module';
import { ToCelsiusPipe } from '../pipes/to-celsius/to-celsius';
import { TommHgPipe } from '../pipes/tomm-hg/tomm-hg';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WeathercardComponent/*,
    ToCelsiusPipe,
    TommHgPipe */
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    OpenWeatherMapProvider,
    ConvertProvider
  ]
})
export class AppModule {}
