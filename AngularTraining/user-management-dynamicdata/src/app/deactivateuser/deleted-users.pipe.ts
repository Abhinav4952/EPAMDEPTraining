import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deletedUsers'
})

export class DeletedUsersPipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.filter((item)=>{
      return !item.isDeleted;
    });
  }
}

