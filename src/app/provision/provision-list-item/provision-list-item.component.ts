import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-provision-list-item]',
  templateUrl: './provision-list-item.component.html',
  styleUrls: ['./provision-list-item.component.scss']
})
export class ProvisionListItemComponent implements OnInit {
  @Input('provision')
  provision;

  constructor() { }

  ngOnInit() {
  }

}
