import { AcknowledgementStatus } from './models/acknowledgement.interface';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subject } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'football-club';

  config = {
    team: {
      loaded: false,
      path: 'team/main.js',
      element: 'team-root'
    },
    players: {
      loaded: false,
      path: 'players/main.js',
      element: 'players-root'
    },
    news: {
      loaded: false,
      path: 'news/main.js',
      element: 'news-root'
    }
  };
  constructor(private stateService: StateService) {}
  ngOnInit() {
    this.load('news');
    this.load('team');
    this.load('players');
    this.loadWebComponentLibrary();
  }
  loadWebComponentLibrary() {
    const content = document.getElementById('content');
    const skillsProgressScript = document.createElement('script');
    skillsProgressScript.src =
      'assets/webComponentLibraries/skills-progress.js';
    content.appendChild(skillsProgressScript);
    const cardStatsScript = document.createElement('script');
    cardStatsScript.src = 'assets/webComponentLibraries/card-stats.js';
    content.appendChild(cardStatsScript);
  }
  load(name: string): void {
    console.log('Load ', name);
    const configItem = this.config[name];
    if (configItem.loaded) {
      return;
    }
    const content = document.getElementById('content');
    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);
    const microAppElement: HTMLElement = document.createElement(
      configItem.element
    );
    content.appendChild(microAppElement);
    microAppElement.addEventListener('messageToClub', msg =>
      this.handleMessage(msg)
    );
    microAppElement.setAttribute('state', 'init');
    script.onerror = () => console.error(`error loading ${configItem.path}`);
    this.stateService.registerClient(microAppElement);
  }
  handleMessage(msg): void {
    console.log('Club received message: ', msg.detail);
    this.stateService.setMessage(msg.detail);
  }
  sendState(msg) {
    this.stateService.setState(msg);
  }
  simulateMsg(flag: boolean) {
    const msgToSimulate: AcknowledgementStatus = {
      id: 'EDGE_02',
      name: 'Anthony Martial',
      status: flag
    };
    this.stateService.setMessage(msgToSimulate);
  }
  simulateString() {
    this.stateService.setMessage('init');
  }
  simulateAMsg(flag: boolean) {
    const msgAToSimulate: AcknowledgementStatus = {
      id: 'EDGE_11',
      name: 'Johnson Leo',
      status: flag
    };
    this.stateService.setMessage(msgAToSimulate);
  }
}
