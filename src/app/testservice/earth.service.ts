import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class EarthService {
  constructor() {}

  getAddition(a: number, b: number): number {
    return a + b;
  }

  getMultiplication(c: number, d: number, cd: any) {
    setTimeout(function () {
      let u = c * d;
      cd(u)
    }, 2000);
  }

  getPromiseCall(x: any, y: any): any {
    let z = x + y;
    return Promise.resolve(z)
  }

  getObservable(p:any,q:any):any{
    let r = p/q
    return of(r)
  }

  async getSyncObservableCall(m:any,n:any){
  return  of(m+n) 
  }

  async getSampleData(i:number,j:number){
    return 
  }
}
