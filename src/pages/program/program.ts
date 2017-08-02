import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoritePage } from "../favorite/favorite"

/**
 * Generated class for the ProgramPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})



export class ProgramPage {
  src1: string;
  on1: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.src1 = "assets/img/white Star.png";
    this.on1 = true;

  }
  switch1() {
    if (this.on1) {
      this.src1 = "assets/img/white Star.png"
      this.on1 = false;
    } else {
      this.src1 = "assets/img/white filed star.png"
      this.on1 = true;
    }
  }



  favorite() {
    this.navCtrl.popToRoot(FavoritePage)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }

}
