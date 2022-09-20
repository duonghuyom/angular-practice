import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date = new Date();
  user = {
    name: 'duognhuy',
    age: 21,
  };
}
