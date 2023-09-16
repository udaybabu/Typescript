import { Component, OnInit } from '@angular/core';
import { EarthService } from './earth.service';
import { map } from 'rxjs/operators';

import { Observable, Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.scss'],
})
export class TestserviceComponent implements OnInit {
  private myObservable = new Subscription();
   aSubject = new Subject<any>()
  constructor(private earthService: EarthService) {
    this.aSubject.next(true)
  }

  async ngOnInit(): Promise<void> {
    console.log(`Sum is:${this.earthService.getAddition(10, 20)}`);

    this.earthService.getMultiplication(2, 4, function (res: any) {
      console.log(`Multiplication is:${res}`);
    });

    this.earthService
      .getPromiseCall(4, 5)
      .then(function (data: any) {
        console.log(`Promise data is:${data}`);
      })
      .catch(function (error: any) {
        console.log(`PThis is error:${error}`);
      })
      .finally(console.log(`This is finally`));
    console.log(`Promise is async method call`);
    this.earthService
      .getObservable(20, 8)
      .pipe(
        map(function (p: any) {
          return Math.floor(p);
        })
      )
      .subscribe(function (dta: any) {
        console.log(`Observable data is:${dta}`);
      });
    console.log(`Observable is sync method call`);

    let k = [20, 40, 30, 20, 70, 10];
    console.log(typeof k);

    //  await this.earthService.getSyncObservableCall(20,30).subscribe(function(res:any){
    //  console.log(`Response is:${res}`)
    //  })
    let data = await this.earthService.getSampleData(10,30)

    let aPrem = new Promise(function (resolve: any) {
      setTimeout(function () {
        resolve(100);
      }, 3000);
    });
    aPrem
      .then(function (res) {
        console.log(`Response is:${res}`);
      })
      .catch(function (error) {
        console.log(`Error is:${error}`);
      })
      .finally();

    let bObser = new Observable(function (ob) {
      setTimeout(function () {
        ob.next('Hello Mahesh');
      }, 2000);
    });

    this.myObservable = bObser.subscribe(function (res) {
      console.log(`Observable is:${res}`);
    });

    this.aSubject.subscribe((data) => {
      console.log('Subject is:',this.aSubject)
    })
  }

  ngOnDestroy() {
    if (this.myObservable) {
      this.myObservable.unsubscribe();
    }
  }
}
