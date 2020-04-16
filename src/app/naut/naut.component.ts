import { Component, OnInit, Input } from '@angular/core';

enum NautState {
  Unselected = 0,
  RedSelected,
  RedBanned,
  BlueSelected,
  BlueBanned,
  BothSelected,
  BothBanned,
}

@Component({
  selector: 'ad-naut',
  templateUrl: './naut.component.html',
  styleUrls: ['./naut.component.css']
})
export class NautComponent implements OnInit {
  @Input() name: string = '';
  @Input() src: string = '';

  state = NautState.Unselected;
  NautState = NautState;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNaut(): void {
    console.log(this.state);
    this.state = (this.state + 1) % (NautState.BothBanned + 1);
  }
}
