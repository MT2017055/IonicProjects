import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { QuotesService } from '../../services/quotes';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string }

  constructor(public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {
  }
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!.');
          }
        }
      ]
    });
    alert.present();
  }
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }
  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // use elvis operator (?) when using this approach
  // }
}
