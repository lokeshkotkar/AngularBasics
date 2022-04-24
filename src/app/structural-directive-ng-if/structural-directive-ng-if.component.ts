import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-if',
  templateUrl: './structural-directive-ng-if.component.html',
  styleUrls: ['./structural-directive-ng-if.component.css']
})
export class StructuralDirectiveNgIfComponent implements OnInit {

  ifCondition = true;

  constructor() { }

  ngOnInit(): void {
  }

}
