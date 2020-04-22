import { Component, OnInit } from '@angular/core';
import { Naut } from '../services/naut';
import { NautDataService } from '../services/naut-data.service';

@Component({
  selector: 'ad-naut-picker',
  templateUrl: './naut-picker.component.html',
  styleUrls: ['./naut-picker.component.css']
})
export class NautPickerComponent implements OnInit {

  displayNautList: Naut[];

  constructor(
    private nautDataService: NautDataService,
  ) { }

  ngOnInit(): void {
      this.displayNautList = this.nautDataService.allNauts;
  }
}
