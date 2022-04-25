import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  @Input() componentInteractionParentClild : any;

  // if we want to give different parameter name then wer can specify it 
  @Input('componentInteractionParentClild') anatherName  : any;

  // to send data from clild to parent we need to emit some event
  @Output() public clildEvent = new EventEmitter();

  fireEvent(){
    this.clildEvent.emit('message from clild');
  }

  ngOnInit(): void {
  }

}
