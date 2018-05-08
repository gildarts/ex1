import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  pattern = '';
  characterCount = 0;

  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  updateValue($event: any) {
    this.pattern = $event.target.value;
    this.characterCount = this.pattern.length;

    if ($event.key === 'Escape') {
      this.pattern = '';
      this.characterCount = 0;
    }
  }
}
