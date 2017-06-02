import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage {

  items: any;

  constructor(public navCtrl: NavController, private api: ApiService) {}

  ionViewDidLoad(){
    this.api.getData("USD").subscribe(
      result => this.items = result
    );
  }

  onChangeSeacrhBar(event, value){
    console.log(value);
  }

}
