import { Injectable } from '@angular/core';
import { get } from 'lodash';
import { Naut } from './naut';
import * as nautJsonData from './naut-data.json';

@Injectable({
  providedIn: 'root'
})
export class NautDataService {

  allNauts: Naut[];

  constructor() {
    this.allNauts = get(nautJsonData, 'default', []) as Naut[];
    console.debug('nauts: ', this.allNauts);
  }
}
