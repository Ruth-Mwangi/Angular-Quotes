import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quote[]=[];

  addNewQuote(quote){
    let quotesLength=this.quotes.length+1;
    let up=0;
    let down=0;

    let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,up,down);

    this.quotes.push(quoteObj);
  }
  toggleDetails(index){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }
  constructor() { }

  ngOnInit(): void {
  }

}
