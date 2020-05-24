import { Component, OnInit } from '@angular/core';
import { Naut } from '../services/naut';
import { NautDataService } from '../services/naut-data.service';
import { isNil } from 'lodash';

@Component({
  selector: 'ad-naut-packs',
  templateUrl: './naut-packs.component.html',
  styleUrls: ['./naut-packs.component.css']
})
export class NautPacksComponent implements OnInit {

  thynixNautPack: Naut[];
  haspNautPack: Naut[];
  mathmaticalNautPack: Naut[];
  mlripperNautPack: Naut[];

  constructor(
    private nautDataService: NautDataService,
  ) { }

  ngOnInit(): void {
    this.thynixNautPack = this.nautDataService.getRandomNautsPack('thynix');
    this.haspNautPack = this.nautDataService.getRandomNautsPack('hasp');
    this.mathmaticalNautPack = this.nautDataService.getRandomNautsPack('mathmatical');
    this.mlripperNautPack = this.nautDataService.getRandomNautsPack('mlripper');
  }

  newGame(): void {
    this.thynixNautPack = this.nautDataService.getRandomNautsPack('thynix');
    this.haspNautPack = this.nautDataService.getRandomNautsPack('hasp');
    this.mathmaticalNautPack = this.nautDataService.getRandomNautsPack('mathmatical');
    this.mlripperNautPack = this.nautDataService.getRandomNautsPack('mlripper');
  }

  reroll(player: string): void {
    if (player === 'thynix') {
      this.thynixNautPack = this.nautDataService.getRandomNautsPack('thynix');
    }
    if (player === 'hasp') {
      this.haspNautPack = this.nautDataService.getRandomNautsPack('hasp');
    }
    if (player === 'mathmatical') {
      this.mathmaticalNautPack = this.nautDataService.getRandomNautsPack('mathmatical');
    }
    if (player === 'mlripper') {
      this.mlripperNautPack = this.nautDataService.getRandomNautsPack('mlripper');
    }
  }
}
