import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saleMessage',
  standalone: true
})
export class SaleMessagePipe implements PipeTransform {

  transform(price: number, salePrice?: number): string {
    console.log('in on Sale Message');
    if(salePrice) {
      const difference = price - salePrice;
      return `You save $${difference.toFixed(2)} each!!`
    }
    return '';
  }
}
