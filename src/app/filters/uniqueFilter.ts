import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'uniqueFilter',
    pure: false
  })
  export class UniquePipe implements PipeTransform {
  
    transform(value: any, args?: any): any {
  
      // Remove the duplicate elements
      let uniqueArray = value.filter(function (el, index, array) { 
        return array.indexOf (el) == index;
      });
  
      return uniqueArray;
    }
  }