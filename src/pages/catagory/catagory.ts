import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProgramPage } from '../program/program';

/**
 * Generated class for the CatagoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-catagory',
  templateUrl: 'catagory.html',
})
export class CatagoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatagoryPage');
  }
goToHome(){
    this.navCtrl.push(HomePage);
  }
goToProgram(){
    this.navCtrl.push(ProgramPage);
  }

}
