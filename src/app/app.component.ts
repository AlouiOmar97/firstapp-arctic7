import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  x= false
  msg= ""
  title = 'firstapp ARCTIC7';
  nb = 6
  methodA(){
    return 7
  }
  methodB(){
    this.msg="This is a new Text"
  }
}
