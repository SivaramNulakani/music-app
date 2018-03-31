import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, selectedValue: String): any {
    if(selectedValue=='All')
    return items;
    else
    return items.filter(data=>data.status==selectedValue);
  }

}
