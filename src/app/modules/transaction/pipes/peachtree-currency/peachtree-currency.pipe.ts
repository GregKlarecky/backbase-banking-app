import { Pipe, PipeTransform } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'peachtreeCurrency'
})
export class PeachtreeCurrencyPipe implements PipeTransform {
  transform(value: number, currencyCode: string): string {
    const symbol = getCurrencySymbol(currencyCode, 'narrow');
    const decimalPart = value.toString().split('.')[1];
    if (decimalPart && decimalPart.length === 1) {
      return `${symbol} ${value}0`;
    }
    return `${symbol} ${value}`;
  }
}
