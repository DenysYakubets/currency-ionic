import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { ApiService } from '../../shared/api.service';

interface Map<T> {
    [K: string]: T;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage {

  items: any;
  loader: any;
  basicCurrencyShortStr: string = "us";

  constructor(public navCtrl: NavController, private api: ApiService, private storage: Storage, private loading: LoadingController) {}

  ionViewDidLoad(){
    this.loader = this.loading.create({
      content: 'Getting data...',
    });

    this.items = [];
    //this.storage.set('basicCurrencyShortStr', this.basicCurrencyShortStr);

    // this.storage.get('basicCurrencyShortStr').then(
    //   (val) => this.basicCurrencyShortStr = val,
    //   (error) => this.basicCurrencyShortStr = "us"
    // );


    this.loader.present().then(() => {
        this.api.getData("USD").subscribe(
          result => {
            this.items = result;
            this.loader.dismiss();
          }
        );
    });

    
  }

  onChangeSeacrhBar(event, value){
    console.log(value);
  }


  public currencyDict: Map<string> = {
        "AED": "ae",
        "AFN": "us",
        "ALL": "us",
        "AMD": "us",
        "ANG": "us",
        "AOA": "us",
        "ARS": "us",
        "AUD": "us",
        "AWG": "us",
        "AZN": "us",
        "BAM": "us",
        "BBD": "us",
        "BDT": "us",
        "BGN": "us",
        "BHD": "us",
        "BIF": "us",
        "BMD": "us",
        "BND": "us",
        "BOB": "us",
        "BRL": "us",
        "BSD": "us",
        "BTN": "us",
        "BWP": "us",
        "BYN": "us",
        "BZD": "us",
        "CAD": "us",
        "CDF": "us",
        "CHF": "us",
        "CLP": "us",
        "CNY": "us",
        "COP": "us",
        "CRC": "us",
        "CUC": "us",
        "CUP": "us",
        "CVE": "us",
        "CZK": "us",
        "DJF": "us",
        "DKK": "us",
        "DOP": "us",
        "DZD": "us",
        "EGP": "us",
        "ERN": "us",
        "ETB": "us",
        "EUR": "us",
        "FJD": "us",
        "FKP": "us",
        "GBP": "us",
        "GEL": "us",
        "GHS": "us",
        "GIP": "us",
        "GMD": "us",
        "GNF": "us",
        "GTQ": "us",
        "GYD": "us",
        "HKD": "us",
        "HNL": "us",
        "HRK": "us",
        "HTG": "us",
        "HUF": "us",
        "IDR": "us",
        "ILS": "us",
        "INR": "us",
        "IQD": "us",
        "IRR": "us",
        "ISK": "us",
        "JMD": "us",
        "JOD": "us",
        "JPY": "us",
        "KES": "us",
        "KGS": "us",
        "KHR": "us",
        "KMF": "us",
        "KPW": "us",
        "KRW": "us",
        "KWD": "us",
        "KYD": "us",
        "KZT": "us",
        "LAK": "us",
        "LBP": "us",
        "LKR": "us",
        "LRD": "us",
        "LSL": "us",
        "LYD": "us",
        "MAD": "us",
        "MDL": "us",
        "MGA": "us",
        "MKD": "us",
        "MMK": "us",
        "MNT": "us",
        "MOP": "us",
        "MRO": "us",
        "MUR": "us",
        "MVR": "us",
        "MWK": "us",
        "MXN": "us",
        "MYR": "us",
        "MZN": "us",
        "NAD": "us",
        "NGN": "us",
        "NIO": "us",
        "NOK": "us",
        "NPR": "us",
        "NZD": "us",
        "OMR": "us",
        "PAB": "us",
        "PEN": "us",
        "PGK": "us",
        "PHP": "us",
        "PKR": "us",
        "PLN": "us",
        "PYG": "us",
        "QAR": "us",
        "RON": "us",
        "RSD": "us",
        "RUB": "us",
        "RWF": "us",
        "SAR": "us",
        "SBD": "us",
        "SCR": "us",
        "SDG": "us",
        "SEK": "us",
        "SGD": "us",
        "SHP": "us",
        "SLL": "us",
        "SOS": "us",
        "SRD": "us",
        "STD": "us",
        "SVC": "us",
        "SYP": "us",
        "SZL": "us",
        "THB": "us",
        "TJS": "us",
        "TMT": "us",
        "TND": "us",
        "TOP": "us",
        "TRY": "us",
        "TTD": "us",
        "TWD": "us",
        "TZS": "us",
        "UAH": "ua",
        "UGX": "us",
        "USD": "us",
        "UYU": "us",
        "UZS": "us",
        "VEF": "us",
        "VND": "us",
        "VUV": "us",
        "WST": "us",
        "XAF": "us",
        "XCD": "us",
        "XDR": "us",
        "XOF": "us",
        "XPF": "us",
        "YER": "us",
        "ZAR": "us",
        "ZMW": "us"
    };


}
