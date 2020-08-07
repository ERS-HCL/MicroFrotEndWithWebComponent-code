import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayersService } from '../players.service';
import { PlayersInfo } from '../models/players.interface';

@Component({
  selector: 'players-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  webComponentLoaded: boolean;
  playerSubscription: Subscription;
  playersInfo: PlayersInfo[];

  constructor(private playerService: PlayersService) {}

  ngOnInit(): void {
    this.webComponentLoaded = false;
    // this.loadWebComponentLibrary();
    this.getPlayers();
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.playerSubscription.unsubscribe();
  }
  getPlayers() {
    this.playerSubscription = this.playerService
      .getPlayers()
      .subscribe(players => {
        this.playersInfo = players.data;
        console.log(this.playersInfo);
      });
  }
  loadWebComponentLibrary() {
    if (this.webComponentLoaded) {
      return;
    }
    const content = document.getElementById('cardLoader');
    const cardStatsScript = document.createElement('script');
    cardStatsScript.src = 'assets/webComponentLibraries/card-stats.js';
    content.appendChild(cardStatsScript);
    this.webComponentLoaded = true;
  }
}
