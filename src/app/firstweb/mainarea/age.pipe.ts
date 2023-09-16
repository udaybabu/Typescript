import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  pure: false
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    debugger
    //let hjy = parseInt(args)
    console.log(args)
    if(args[0] === ''){
      return value;
    }else{
    value = value.filter((i:any) => i.age > parseInt(args[0]))
    return value
    }
  }

}
