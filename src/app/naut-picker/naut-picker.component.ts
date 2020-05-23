import { Component, OnInit } from '@angular/core';
import { Naut } from '../services/naut';
import { NautDataService } from '../services/naut-data.service';
import { ActivatedRoute } from '@angular/router';
import { isNil } from 'lodash';

@Component({
  selector: 'ad-naut-picker',
  templateUrl: './naut-picker.component.html',
  styleUrls: ['./naut-picker.component.css']
})
export class NautPickerComponent implements OnInit {

  displayNautList: Naut[];

  constructor(
    private nautDataService: NautDataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe((queryParams) => {
        if (!isNil(queryParams.player)) {
          this.displayNautList = this.nautDataService.getRandomNautsPack(queryParams.player);
        } else {
          this.displayNautList = this.nautDataService.allNauts;
        }
      });
  }
}
