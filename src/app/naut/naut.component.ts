import { Component, OnInit, Input } from '@angular/core';

enum NautState {
  Unselected = 0,
  Selected,
  Banned,
}

@Component({
  selector: 'ad-naut',
  templateUrl: './naut.component.html',
  styleUrls: ['./naut.component.css']
})
export class NautComponent implements OnInit {
  @Input() name: string = '';
  @Input() src: string = '';
  @Input() isGolden = false;
  @Input() rarity = 'rare';

  redState = NautState.Unselected;
  blueState = NautState.Unselected;
  NautState = NautState;

  constructor() { }

  ngOnInit(): void {
  }

  toggleRedNaut(): void {
    console.log(this.redState);
    this.redState = (this.redState + 1) % (NautState.Banned + 1);
  }

  /** Return false to stop the propagation to context menu click */
  toggleBlueNaut(): boolean {
    console.log(this.blueState);
    this.blueState = (this.blueState + 1) % (NautState.Banned + 1);
    return false;
  }
}
