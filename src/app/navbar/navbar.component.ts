import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../state.service';
import { Subscription } from 'rxjs';
import { AcknowledgementStatus } from '../models/acknowledgement.interface';
import { PlayersInfo } from '../models/players.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private sidebarVisible = false;
  public showStatus: boolean;
  playerSubscription: Subscription;
  playersInfo: PlayersInfo[];
  subscription: Subscription;
  // public selectionInfos: AcknowledgementStatus[];
  public selectionInfos: any[];
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.initNav();
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.playerSubscription.unsubscribe();
  }
  public initNav() {
    this.showStatus = false;
    this.getPlayers();
    this.subscription = this.stateService.getMessage().subscribe(data => {
      if (typeof data !== 'string') {
        this.changeStatus(data);
      }
    });
  }
  private changeStatus(data: AcknowledgementStatus) {
    this.selectionInfos.find(
      selectionInfos => selectionInfos.id === data.id
    ).status = data.status;
    this.selectionInfos.find(
      selectionInfos => selectionInfos.id === data.id
    ).received = true;
    this.showStatus = true;
    /* for (const i in this.selectionInfos) {
      if (this.selectionInfos[i].id === data.id) {
        this.selectionInfos[i].status = data.status;
        this.selectionInfos[i].received = true;
        this.showStatus = true;
        break; // Stop this loop, we found it!
      }
    } */
  }
  sidebarToggle() {
    const body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible === false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
  sendState(msg) {
    this.stateService.setState(msg);
  }
  getPlayers() {
    this.playerSubscription = this.stateService
      .getPlayers()
      .subscribe(players => {
        this.selectionInfos = players.data;
        console.log(this.selectionInfos);
      });
  }
}
