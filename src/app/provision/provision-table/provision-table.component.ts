import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-provision-table',
  templateUrl: './provision-table.component.html',
  styleUrls: ['./provision-table.component.scss']
})
export class ProvisionTableComponent implements OnInit {
  dtOptions;

  constructor() {
  }

  ngOnInit() {
    this.dtOptions = {
      'bLengthChange': false,
      'bSort': false
    };
  }

}
