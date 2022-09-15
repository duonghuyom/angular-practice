import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDanger = false;
  isWarning = false;
  classes = 'box red-border yellow-background';
  blue = 'lightblue';
}
