import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from "../pages/home/home"
import { FavoritePage } from "../pages/favorite/favorite"
import { ProgramPage } from '../pages/program/program';
import { CatagoryPage } from '../pages/catagory/catagory';
import { ProgramDataManagerProvider } from '../providers/program-data-manager/program-data-manager';
import { HttpModule } from '@angular/http'

import { dataProvider } from '../pages/home/data'


@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    HomePage,
    ProgramPage,
    CatagoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    HomePage,
    ProgramPage,
    CatagoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProgramDataManagerProvider, 
    dataProvider
    
  ]
})
export class AppModule { }
