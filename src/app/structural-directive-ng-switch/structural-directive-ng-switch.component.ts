import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-switch',
  templateUrl: './structural-directive-ng-switch.component.html',
  styleUrls: ['./structural-directive-ng-switch.component.css']
})
export class StructuralDirectiveNgSwitchComponent implements OnInit {

  public color = "red";

  constructor() { }

  ngOnInit(): void {
  }

}
