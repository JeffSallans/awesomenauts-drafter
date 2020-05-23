import { Injectable } from '@angular/core';
import { get, filter, shuffle, random, map, flatten, union, includes, some } from 'lodash';
import { Naut } from './naut';
import * as nautJsonData from './naut-data.json';
import * as haspData from './hasp.json';
import * as mathmaticalData from './mathmatical.json';
import * as mlripperData from './mlripper.json';
import * as thynixData from './thynix.json';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class NautDataService {

  allNauts: Naut[];

  constructor() {
    this.allNauts = get(nautJsonData, 'default', []) as Naut[];
    console.debug('nauts: ', this.allNauts);
  }

  getNautsForPlayer(player: string): Naut[] {
    let playerNauts = [];
    if (player === 'hasp') {
      playerNauts = get(haspData, 'default', []) as Naut[];
    }
    if (player === 'mathmatical') {
      playerNauts = get(mathmaticalData, 'default', []) as Naut[];
    }
    if (player === 'mlripper') {
      playerNauts = get(mlripperData, 'default', []) as Naut[];
    }
    if (player === 'thynix') {
      playerNauts = get(thynixData, 'default', []) as Naut[];
    }
    return playerNauts;
  }

  getRandomNautsPack(player: string) {
    const nauts = this.getNautsForPlayer(player);

    const legendaryNauts = filter(nauts, (naut) => naut.tier === "legendary") || [];
    const epicNauts = filter(nauts, (naut) => naut.tier === "epic") || [];
    const rareNauts = filter(nauts, (naut) => naut.tier !== "legendary" && naut.tier !== "epic" && naut.tier !== "common") || [];

    const shuffledLegendaryNauts = shuffle(legendaryNauts);
    const shuffledEpicNauts = shuffle(epicNauts);
    const shuffledRareNauts = shuffle(rareNauts);

    const nautPoolRolls = [
      random(20),
      random(20),
      random(20),
      random(20),
      random(20),
    ];

    const nautPool = map(nautPoolRolls, (roll) => {
      if (roll === 19) {
        return shuffledLegendaryNauts.pop();
      } else if (includes([15, 16, 17, 18], roll)) {
        return shuffledEpicNauts.pop();
      } else {
        return shuffledRareNauts.pop();
      }
    });

    const hasLegendaryOrEpicNauts = some(nautPool, (naut) => naut && (naut.tier === "legendary" || naut.tier === "epic"));

    if (!hasLegendaryOrEpicNauts) {
      nautPool[0] = shuffledEpicNauts.pop();
    }

    return nautPool;
  }
}
