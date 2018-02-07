import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection: { category: string, quote: Quote[], icon: string }[];
  quotesPage= QuotesPage;

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
