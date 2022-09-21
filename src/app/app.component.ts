import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date = new Date();
  users = [
    {
      name: 'duognhuy',
      age: 21,
    },
    {
      name: 'tom',
      age: 10,
    },
    {
      name: 'huytom',
      age: 19,
    },
  ];

  addr = {
    address1: '458 Minh Khai',
    address2: 'MK458',
    city: 'Ha Noi',
    state: 'Hai Ba Trung',
    zip: '10000',
    country: 'VN',
  };

  formatAddress(addr: any) {
    return (
      addr.address1 +
      ',' +
      addr.address2 +
      ',' +
      addr.city +
      ',' +
      addr.state +
      ',' +
      addr.state +
      ',' +
      addr.zip +
      ',' +
      addr.country
    );
  }
}
