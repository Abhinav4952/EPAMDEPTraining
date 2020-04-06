import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUsers'
})

export class ActiveUsersPipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.filter((item)=>{
      return item.isDeleted;
    });
  }
}

