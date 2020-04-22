import { Component, OnInit } from '@angular/core';
import { NautDataService } from '../services/naut-data.service';
import { Naut } from '../services/naut';

@Component({
  selector: 'ad-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {

  displayNautList: Naut[];

  constructor(
    private nautDataService: NautDataService,
  ) { }

  ngOnInit(): void {
      this.displayNautList = this.nautDataService.allNauts;
  }

}
