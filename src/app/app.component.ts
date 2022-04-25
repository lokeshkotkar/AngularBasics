import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  
  // component interaction variables 
  public componentInteraction = "text from parent"
  public messageFromClild : any;
}
