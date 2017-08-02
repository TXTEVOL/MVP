import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgramPage } from '../program/program';

/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }
goToProgram(){
    this.navCtrl.push(ProgramPage);
  }
}
