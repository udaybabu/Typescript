import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = '';
  products: any = [];
  ngOnInit(): void {
    this.title = 'Pratap';
  }
  dataAdd(p: any) {
    if(p.value === ''){
     alert("Please enter text");
     return
    }
    this.products.push(p.value);
    p.value = '';
    console.log(this.products);
  }
}
