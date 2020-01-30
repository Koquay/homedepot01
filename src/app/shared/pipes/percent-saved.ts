import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentSaved'
})
export class PercentSaved implements PipeTransform {

  transform(price: number, listPrice: number): any {
    if(price && listPrice) {
      let amountSaved = (listPrice - price).toFixed(2);
      let percentSaved = 100 - (100 * price  / listPrice);
      return `Save $${amountSaved} (${percentSaved.toFixed(0)}%)`
    }
    return null;
  }

}
