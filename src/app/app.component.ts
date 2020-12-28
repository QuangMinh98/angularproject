import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 5;
  arr = [1,2,3,4,5]
  lg;
  ft;
  login(username,password){
    this.lg = username.value + ' ' + password.value
  }
  acceptData = (gt:any) => {
    this.ft = gt
  }
}
