import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  public name = "Lokesh Kotkar";
  public propId = "inputId"
  public click = "";
  disabledValue= false;
  public twoWayDataBinding: any;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "welcome "+ this.name;
  }

  onClick(event: any){
     console.log(event);
    this.click = event.type;
  }

  templateReference(input: string){
    console.log("value of input is "+input);

  }

}
