import { Component, OnInit } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { NetworkService } from './network/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  status: OnlineStatusType | undefined;
  onlineStatusCheck: any = OnlineStatusType;

  constructor(
    private onlineStatusService: OnlineStatusService,
    private networkState: NetworkService
  ) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // Retrieve Online Status Type
      this.status = status;
      console.log(this.status);
      this.networkState.updateNetworkState(this.status);
    });
  }
  ngOnInit(): void {}
}
