import {Component, Input, OnInit} from '@angular/core';
import {ProvisionService} from '../../services/provision.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-provision-table',
  templateUrl: './provision-table.component.html',
  styleUrls: ['./provision-table.component.scss']
})
export class ProvisionTableComponent implements OnInit {
  @Input('recentOnly')
  recentOnly;
  dtOptions;
  provisions;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private _provisionService: ProvisionService) {
  }

  ngOnInit() {
    console.log(this.recentOnly);
    this.dtOptions = {
      'bLengthChange': false,
      'bSort': false,
      'bPaginate': !this.recentOnly,
      'bFilter': !this.recentOnly,
      'bInfo': false
    };

    this._provisionService.getProvisions('aadmin').subscribe(data => {
      this.provisions = data;
      this.dtTrigger.next(data);
    });

    console.log(this.provisions);
  }

}
