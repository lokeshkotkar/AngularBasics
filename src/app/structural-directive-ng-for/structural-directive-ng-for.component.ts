import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-for',
  templateUrl: './structural-directive-ng-for.component.html',
  styleUrls: ['./structural-directive-ng-for.component.css']
})
export class StructuralDirectiveNgForComponent implements OnInit {

  public colors = ["red","green","blue","yellow"];

  constructor() { }

  ngOnInit(): void {
  }

}
