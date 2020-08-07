import { PlayersService } from './../players.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AcknowledgementStatus } from 'src/app/models/acknowledgement.interface';
import { PlayersInfo } from '../models/players.interface';

@Component({
  selector: 'players-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  showButtons: boolean;
  webComponentLoaded: boolean;
  playersInfo: PlayersInfo[];
  subscription: Subscription;
  playerSubscription: Subscription;

  constructor(private playerService: PlayersService) {}

  ngOnInit(): void {
    this.initCards();
    // this.loadWebComponentLibrary();
    this.getPlayers();
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.playerSubscription.unsubscribe();
  }
  initCards() {
    this.webComponentLoaded = true;
    this.showButtons = false;
    this.subscription = this.playerService.getState().subscribe(data => {
      if (data === 'sendInvite') {
        this.showButtons = true;
      }
    });
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
    const content = document.getElementById('webComponentLoader');
    const skillsProgressScript = document.createElement('script');
    skillsProgressScript.src =
      'assets/webComponentLibraries/skills-progress.js';
    content.appendChild(skillsProgressScript);
    this.webComponentLoaded = true;
  }
  sendInvite(playerId: string, acknowledgement: boolean) {
    const playerInfoObj: PlayersInfo = this.playersInfo.find(
      player => player.id === playerId
    );
    this.playersInfo.find(player => player.id === playerId).statusSent = true;
    const ackObj: AcknowledgementStatus = {
      id: playerInfoObj.id,
      name: playerInfoObj.firstname + playerInfoObj.lastname,
      status: acknowledgement
    };
    console.log(ackObj);
    console.log(this.playersInfo);
    // this.playerService.acknowledgeInvite(ackObj);
    this.playerService.setInvite(ackObj);
  }
}
