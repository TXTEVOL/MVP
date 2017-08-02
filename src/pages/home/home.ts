import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatagoryPage } from '../catagory/catagory';
import { FavoritePage } from '../favorite/favorite';


import  {ProgramPage} from '../program/program';
import { ProgramDataManagerProvider } from '../../providers/program-data-manager/program-data-manager'
import { dataProvider } from './data';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  searchQuery: string = '';


  categories: string[];
  items: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public programsProvider: ProgramDataManagerProvider, public localData: dataProvider) {
    this.initializeItems();

  }
  images: string[];

  initializeItems() {
    this.categories = [
      'Tech',
      'Art',
      'Sports',
      'Music',
      'Camp',];
    this.items = this.localData.db.map(obj => {return obj.title})

    console.log(this.items)
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  goToCatagory() {
    this.navCtrl.push(CatagoryPage);
  }


  goToFavorite() {
    this.navCtrl.push(FavoritePage);
  }
  async setFilteredItems() {
    //this.items = await this.programsProvider.filterItems(this.searchQuery);
    this.items = await this.localData.filterItems(this.searchQuery)
  }
  viewItem(program) {
    this.navCtrl.push(ProgramPage, {
      program: program
    });
  }


}
