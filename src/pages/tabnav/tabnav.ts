import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { FavoritePage } from './../favorite/favorite';
import { CartPage } from './../cart/cart';
import { SearchPage } from './../search/search';
import { MorePage } from './../more/more';

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
export class TabnavPage {

  homeRoot = HomePage;
  favoriteRoot = FavoritePage;
  cartRoot = CartPage;
  searchRoot = SearchPage;
  moreRoot = MorePage;


  constructor(public navCtrl: NavController) {}

}
